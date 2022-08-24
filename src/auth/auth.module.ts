import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ConfigProjModule } from '../config/config.module';
import { AuthConfig } from './auth.config';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';

@Module({
  imports: [ConfigProjModule],
  controllers: [AuthController],
  providers: [AuthService, AuthConfig, ConfigService],
})
export class AuthModule {}
