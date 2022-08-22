import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from '../user/user.module';
import { createUser } from './db/models/user.model';

const configParam = {
  // TODO: ver de agregar otros ambientes
  envFilePath: ['.env.dev'],
  isGlobal: true,
};

@Module({
  imports: [ConfigModule.forRoot(configParam), UserModule],
})
export class ConfigProjModule {
  constructor() {
    createUser();
  }
}
