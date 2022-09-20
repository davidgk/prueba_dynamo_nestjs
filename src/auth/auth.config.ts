import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthConfig {
  UserPoolId: string;
  ClientId: string;
  secretKey: string;

  constructor(private configService: ConfigService) {
    this.UserPoolId = configService.get<string>('AWS_COGNITO_USER_POOL_ID');
    this.ClientId = configService.get<string>('AWS_COGNITO_CONFIG_ID');
    this.secretKey = configService.get<string>('AWS_SECRET_KEY');
  }
}
