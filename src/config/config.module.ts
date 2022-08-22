import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { createUser } from '../user/entities/user.model';
import { UserModule } from '../user/user.module';

console.log('ENVIRONMENT:', process.env.NODE_ENV);
const ENVIRONMENT = process.env.NODE_ENV || 'dev';
const configParam = {
  envFilePath: [`.env.${ENVIRONMENT}`],
  isGlobal: true,
};

@Module({
  imports: [ConfigModule.forRoot(configParam), UserModule],
})
export class ConfigProjModule {
  constructor() {
    console.log('Create User schema');
    createUser();
  }
}
