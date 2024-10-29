import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import Twitter from 'twitter';

import { AllConfigType } from '../../../../config';
import { AuthTwitterLoginDto } from '../dto';
import { SocialInterface } from '../../../social/interfaces';

@Injectable()
export class AuthTwitterService {
  constructor(private configService: ConfigService<AllConfigType>) {}

  async getProfileByToken(
    loginDto: AuthTwitterLoginDto,
  ): Promise<SocialInterface> {
    const twitter = new Twitter({
      consumer_key: this.configService.getOrThrow('twitter.consumerKey', {
        infer: true,
      }),
      consumer_secret: this.configService.getOrThrow('twitter.consumerSecret', {
        infer: true,
      }),
      access_token_key: loginDto.accessTokenKey,
      access_token_secret: loginDto.accessTokenSecret,
    });

    const data: Twitter.ResponseData = await new Promise((resolve) => {
      twitter.get(
        'account/verify_credentials',
        { include_email: true },
        (error, profile) => {
          resolve(profile);
        },
      );
    });

    return {
      id: data.id?.toString(),
      email: data.email,
      firstName: data.name,
    };
  }
}
