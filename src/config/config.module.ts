import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DynamooseModule } from 'nestjs-dynamoose';
import { DynamooseConfigService } from './services/orm-config.service';

console.log('ENVIRONMENT:', process.env.NODE_ENV);
const ENVIRONMENT = process.env.NODE_ENV || 'dev';
const configParam = {
  envFilePath: [`.env.${ENVIRONMENT}`],
  isGlobal: true,
  cache: true,
};

@Module({
  imports: [
    ConfigModule.forRoot(configParam),
    DynamooseModule.forRootAsync({ useClass: DynamooseConfigService }),
  ],
})
export class ConfigProjectModule {}
