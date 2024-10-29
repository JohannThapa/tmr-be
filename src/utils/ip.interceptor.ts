import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import axios from 'axios';
import { ConfigService } from '@nestjs/config';
import { InjectPinoLogger, PinoLogger } from 'nestjs-pino';

@Injectable()
export class IpInterceptor implements NestInterceptor {
  private readonly ipInfoApiKey?: string;

  constructor(
    @InjectPinoLogger(IpInterceptor.name) private readonly logger: PinoLogger,
    private readonly configService: ConfigService,
  ) {
    this.ipInfoApiKey = this.configService.get<string>('IPINFO_KEY', {
      infer: true,
    });
  }

  async intercept(
    context: ExecutionContext,
    next: CallHandler,
  ): Promise<Observable<any>> {
    const request = context.switchToHttp().getRequest();
    if (request.url.includes('advance-health')) {
      const userIp =
        request.headers['x-forwarded-for'] || request.connection.remoteAddress;
      this.logger.info(`Original IP Address: ${userIp}`);
      let actualIp = userIp;

      if (userIp === '::1' || userIp === '127.0.0.1') {
        actualIp = await this.fetchPublicIp();
        this.logger.info(`Fetched Public IP: ${actualIp}`);
      }

      const locationData = await this.getLocationData(actualIp);
      request.locationData = locationData;
      request.actualIp = actualIp;

      this.logger.info(`Location data for IP ${actualIp}`, {
        context: 'Location Check',
        location: locationData,
      });
    }

    return next.handle();
  }

  async getLocationData(ip: string) {
    if (!this.ipInfoApiKey) {
      this.logger.error('IPInfo API key is missing');
      return null;
    }

    try {
      const { data } = await axios.get(
        `https://ipinfo.io/${ip}?token=${this.ipInfoApiKey}`,
      );
      const [latitude, longitude] = data.loc
        ? data.loc.split(',')
        : [undefined, undefined];
      return {
        city: data.city,
        region: data.region,
        country: data.country,
        latitude,
        longitude,
      };
    } catch (error) {
      this.logger.error('Error fetching IP location data:', error.message);
      return null;
    }
  }

  async fetchPublicIp(): Promise<string> {
    try {
      const response = await axios.get('https://api.ipify.org?format=json');
      return response.data.ip;
    } catch (error) {
      this.logger.error('Error fetching public IP:', error.message);
      return '0.0.0.0';
    }
  }
}
