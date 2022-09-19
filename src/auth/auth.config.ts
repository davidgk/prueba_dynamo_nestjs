import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthConfig {
  public userPoolId = '';
  public clientId = '';
  public region = 'us-east-1';
  public authority = `https://cognito-idp.${this.region}.amazonaws.com/${this.userPoolId}`;
}
