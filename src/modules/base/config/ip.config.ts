import { registerAs } from '@nestjs/config';

import { IsJSON, IsOptional } from 'class-validator';
import { IpConfig } from './ip-config.type';
import validateConfig from '../../../utils/validate-config';

class EnvironmentVariablesValidator {
  @IsJSON()
  @IsOptional()
  IPINFO_KEY: string;
}

export default registerAs<IpConfig>('ip', () => {
  validateConfig(process.env, EnvironmentVariablesValidator);

  return {
    ipInfoKey: JSON.parse(process.env.IPINFO_KEY ?? '[]'),
  };
});
