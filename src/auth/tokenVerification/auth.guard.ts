import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { ENV } from '../../config';
import { AuthenticationHandler } from './auth.handler';

@Injectable()
export class AuthenticationGuard implements CanActivate {
  constructor(private authHandler: AuthenticationHandler) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    try {
      console.log('-----')
      console.log(ENV)
      console.log('-----')
      const requestRaw = context.switchToHttp().getRequest();
      const request = { token: requestRaw.headers.token };
      // Under tests condition avoid situations.
      const result =
        ENV === 'local'
          ? { isValid: true }
          : await this.authHandler.handler(request);
      console.log(result);
      if (result) requestRaw.userInfo = result;
      return result.isValid;
    } catch (e) {
      console.error('Cannot validate User', e);
      return false;
    }
  }
}
