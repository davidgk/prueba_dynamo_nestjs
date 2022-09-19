import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthConfig {
  public userPoolId = 'us-east-1_l7OfUeCNK';
  public clientId = '20mous2beblg46arhu9k3a8dil';
  public region = 'us-east-1';
  public authority = `https://cognito-idp.${this.region}.amazonaws.com/${this.userPoolId}`;
}
