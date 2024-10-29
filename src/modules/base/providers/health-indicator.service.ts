import { Injectable } from '@nestjs/common';
import {
  HealthIndicator,
  HealthIndicatorResult,
  HealthCheckError,
  HealthIndicatorStatus,
} from '@nestjs/terminus';
import * as os from 'os';
import * as disk from 'diskusage';

@Injectable()
export class HealthIndicatorService extends HealthIndicator {
  private getMemoryUsage(): HealthIndicatorResult {
    const totalMemory = os.totalmem();
    const freeMemory = os.freemem();
    const usedMemory = totalMemory - freeMemory;
    const memoryUsage = (usedMemory / totalMemory) * 100;
    const status: HealthIndicatorStatus = memoryUsage < 85 ? 'up' : 'down';

    return {
      memory: {
        total: totalMemory,
        used: usedMemory,
        free: freeMemory,
        usagePercentage: memoryUsage.toFixed(2),
        status,
      },
    };
  }

  private getCpuLoad(): HealthIndicatorResult {
    const loadAverage = os.loadavg()[0];
    const status = loadAverage < os.cpus().length ? 'up' : 'down';
    return {
      cpu: {
        loadAverage,
        status,
      },
    };
  }

  private async getDiskSpace(): Promise<HealthIndicatorResult> {
    try {
      const { available, total, free } = await disk.check('/');
      const usage = ((total - free) / total) * 100;
      const status: HealthIndicatorStatus = usage < 90 ? 'up' : 'down';

      return {
        disk: {
          total,
          free,
          used: total - free,
          usagePercentage: usage.toFixed(2),
          status,
          available,
        },
      };
    } catch (error) {
      throw new HealthCheckError('Disk check failed', error);
    }
  }

  async isHealthy(): Promise<HealthIndicatorResult> {
    return {
      ...this.getMemoryUsage(),
      ...this.getCpuLoad(),
      ...(await this.getDiskSpace()),
    };
  }
}
