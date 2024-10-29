import { Controller, Get, Req } from '@nestjs/common';
import {
  HealthCheck,
  HealthCheckResult,
  HealthCheckService,
  HealthIndicatorResult,
  HttpHealthIndicator,
  TypeOrmHealthIndicator,
} from '@nestjs/terminus';
import { InjectPinoLogger, PinoLogger } from 'nestjs-pino';
import { ApiTags } from '@nestjs/swagger';
import { Public } from '../decorators';
import { HealthIndicatorService } from '../providers';
import { Request } from 'express';

@ApiTags('Common Operations')
@Controller('common')
export class HealthController {
  constructor(
    @InjectPinoLogger(HealthController.name)
    private readonly logger: PinoLogger,
    private health: HealthCheckService,
    private http: HttpHealthIndicator,
    private db: TypeOrmHealthIndicator,
    private healthIndicator: HealthIndicatorService,
  ) {}

  @Public()
  @Get('health')
  @HealthCheck()
  public async check(): Promise<HealthCheckResult> {
    const healthResult = await this.health.check([
      async (): Promise<HealthIndicatorResult> =>
        this.http.pingCheck('dns', 'https://1.1.1.1'),
      async (): Promise<HealthIndicatorResult> => this.db.pingCheck('database'),
    ]);

    for (const [key, value] of Object.entries(healthResult.details)) {
      this.logger.info({
        context: `Health check of ${key}`,
        status: value['status'],
        details: value,
      });
    }

    return healthResult;
  }

  @Public()
  @Get('full-check')
  @HealthCheck()
  public async fullCheck(
    @Req() request: Request | any,
  ): Promise<HealthCheckResult> {
    const healthResult = await this.health.check([
      async (): Promise<HealthIndicatorResult> =>
        this.http.pingCheck('dns', 'https://1.1.1.1'),
      async (): Promise<HealthIndicatorResult> => this.db.pingCheck('database'),
      async (): Promise<HealthIndicatorResult> =>
        this.healthIndicator.isHealthy(),
    ]);

    if (request.actualIp && request.locationData) {
      healthResult.details.ipAddress = request.actualIp;
      healthResult.details.location = request.locationData;
    } else {
      this.logger.warn('IP or location data is missing for advance-health');
    }

    return healthResult;
  }
}
