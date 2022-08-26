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
    const IS_DEV: boolean = ['local', 'test'].includes(
      this.configService.get('NODE_ENV'),
    );
    return {
      aws: {
        accessKeyId: this.configService.get('AWS_ID'),
        secretAccessKey: this.configService.get('AWS_SECRET'),
        region: this.configService.get('AWS_REGION'),
      },
      model: {
        // This configuration is recommended to disable in productive environments
        create: IS_DEV,
      },
      local: IS_DEV,
      logger: IS_DEV,
    };
  }
}
