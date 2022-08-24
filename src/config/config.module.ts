import { Module } from '@nestjs/common';
import { dbClient } from './db/config';
import { ConfigModule } from '@nestjs/config';
import { createUser } from '../user/entities/user.model';
import { DYNAMO_CONFIG_DB } from './index';

console.log('ENVIRONMENT:', process.env.NODE_ENV);
const ENVIRONMENT = process.env.NODE_ENV || 'dev';
const configParam = {
  envFilePath: [`.env.${ENVIRONMENT}`],
  isGlobal: true,
};

@Module({
  imports: [ConfigModule.forRoot(configParam)],
  providers: [{ provide: DYNAMO_CONFIG_DB, useValue: dbClient }],
  exports: [DYNAMO_CONFIG_DB],
})
export class ConfigProjModule {
  constructor() {
    console.log('Create User schema');
    createUser();
  }
}
