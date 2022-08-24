import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ClaimVerifyResult, handler } from './jwt.verify';
import { AuthService } from './auth.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: authService.secretKey,
    });
  }

  public async validate(
    payload: any,
    done: (err: Error | null, result: ClaimVerifyResult) => void,
  ) {
    const userInfo = await handler(payload);
    if (!userInfo) {
      return done(new UnauthorizedException(), null);
    }
    done(null, userInfo);
  }
}
