import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ConfigProjModule } from '../config/config.module';
import { AuthConfig } from './auth.config';
import { AuthController } from './auth.controller';
import { AuthenticationGuard } from './tokenVerification/auth.guard';
import { AuthService } from './auth.service';
import { AuthenticationHandler } from './tokenVerification/auth.handler';

@Module({
  imports: [ConfigProjModule],
  controllers: [AuthController],
  providers: [
    AuthService,
    AuthConfig,
    ConfigService,
    AuthenticationHandler,
    AuthenticationGuard,
  ],
  exports: [AuthenticationGuard],
})
export class AuthModule {}