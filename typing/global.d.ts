import type { Payload } from '../src/modules/authentications/auth';

export declare global {
  type AnyObject = Record<string, unknown>;

  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: string;
      APP_PORT: string;
      APP_NAME: string;
      API_PREFIX: string;
      APP_FALLBACK_LANGUAGE: string;
      APP_HEADER_LANGUAGE: string;
      FRONTEND_DOMAIN: string;
      BACKEND_DOMAIN: string;

      DATABASE_TYPE: string;
      DATABASE_HOST: string;
      DATABASE_PORT: string;
      DATABASE_USERNAME: string;
      DATABASE_PASSWORD: string;
      DATABASE_NAME: string;
      DATABASE_URL: string;

      SUPABASE_URL: string;
      SUPABASE_KEY: string;

      AUTH_JWT_SECRET: string;
      AUTH_REFRESH_SECRET: string;
      AUTH_FORGOT_SECRET: string;
      AUTH_CONFIRM_EMAIL_SECRET: string;
    }
  }

  namespace Express {
    interface Request {
      // customProps of pino-http
      customProps: object;
    }
    // eslint-disable-next-line @typescript-eslint/no-empty-interface
    interface User extends Payload {}
  }
}
 