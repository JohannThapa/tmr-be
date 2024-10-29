import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';

import { MailModule } from '../../../mail/mail.module';
import { SessionModule } from '../../session/session.module';
import {
  AnonymousStrategy,
  JwtRefreshStrategy,
  JwtStrategy,
} from './strategies';
import { AuthService } from './providers';
import { AuthController } from './controllers';
import { UsersModule } from '../../users/users.module';

@Module({
  imports: [
    UsersModule,
    SessionModule,
    PassportModule,
    MailModule,
    JwtModule.register({}),
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy, JwtRefreshStrategy, AnonymousStrategy],
  exports: [AuthService],
})
export class AuthModule {}
