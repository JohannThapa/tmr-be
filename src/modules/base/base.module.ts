import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { TerminusModule } from '@nestjs/terminus';
import * as providers from './providers';
import * as controllers from './controllers';

const services = Object.values(providers);

@Module({
  imports: [TerminusModule, HttpModule],
  controllers: Object.values(controllers),
  providers: services,
  exports: services,
})
export class BaseModule {}
