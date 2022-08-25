import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import {
  DynamooseModuleOptions,
  DynamooseOptionsFactory,
} from 'nestjs-dynamoose';

@Injectable()
export class DynamooseConfigService implements DynamooseOptionsFactory {
  constructor(private readonly configService: ConfigService) {}
  createDynamooseOptions(): DynamooseModuleOptions {
    const NODE_ENV: boolean = this.configService.get('NODE_ENV') === 'dev';
    return {
      aws: {
        accessKeyId: this.configService.get('AWS_ID'),
        secretAccessKey: this.configService.get('AWS_SECRET'),
        region: this.configService.get('AWS_REGION'),
      },
      local: NODE_ENV,
      logger: NODE_ENV,
    };
  }
}
