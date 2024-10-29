import { AppConfig } from './app-config.type';
import { AppleConfig } from '../modules/authentications/auth-apple/config/apple-config.type';
import { AuthConfig } from '../modules/authentications/auth/config/auth-config.type';
import { DatabaseConfig } from '../database/config/database-config.type';
import { MailConfig } from '../mail/config/mail-config.type';
import { TwitterConfig } from '../modules/authentications/auth-twitter/config/twitter-config.type';
import { FacebookConfig } from '../modules/authentications/auth-facebook/config/facebook-config.type';
import { GoogleConfig } from '../modules/authentications/auth-google/config/google-config.type';
import { FileConfig } from '../modules/files/config/file-config.type';
import { IpConfig } from '../modules/base/config';

export type AllConfigType = {
  app: AppConfig;
  apple: AppleConfig;
  auth: AuthConfig;
  database: DatabaseConfig;
  facebook: FacebookConfig;
  file: FileConfig;
  google: GoogleConfig;
  mail: MailConfig;
  twitter: TwitterConfig;
  ipInfoKey: IpConfig;
};
