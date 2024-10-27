// app.middleware.ts
import { INestApplication } from '@nestjs/common';
import compression from 'compression';
import session from 'express-session';
import helmet from 'helmet';
import passport from 'passport';
import { SupabaseConfigService } from './database/supabase-config.service';

export function middleware(
  app: INestApplication,
  supabaseConfig: SupabaseConfigService,
): INestApplication {
  const isProduction = process.env['NODE_ENV'] === 'production';

  // Get Supabase client from SupabaseConfigService
  const supabase = supabaseConfig.getClient();

  // Middleware to attach Supabase client to each request
  app.use((req, res, next) => {
    req.supabase = supabase;
    next();
  });

  // Set up compression for responses
  app.use(compression());

  // Set up session management
  app.use(
    session({
      secret: process.env['SESSION_SECRET'] || 'defaultSecret',
      resave: false,
      saveUninitialized: true,
      cookie: { secure: isProduction },
    }),
  );

  // Set up Passport for authentication
  app.use(passport.initialize());
  app.use(passport.session());
  // TODO: Use this after deployment
  // app.use(
  //   helmet({
  //     contentSecurityPolicy: isProduction ? undefined : false,
  //     crossOriginEmbedderPolicy: isProduction ? undefined : false,
  //   }),
  // );
  // Configure security headers using Helmet
  app.use(
    helmet({
      contentSecurityPolicy: false,
      crossOriginEmbedderPolicy: false,
    }),
  );

  return app;
}
