import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AuthModule } from '../auth/auth.module';
import { AuthTwitterService } from './providers';
import { AuthTwitterController } from './controllers';

@Module({
  imports: [ConfigModule, AuthModule],
  providers: [AuthTwitterService],
  exports: [AuthTwitterService],
  controllers: [AuthTwitterController],
})
export class AuthTwitterModule {}
