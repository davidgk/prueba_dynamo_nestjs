import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigProjModule } from './config/config.module';
import { UserModule } from './user/user.module';
import { TaskModule } from './task/task.module';
import { DynamooseModule } from 'nestjs-dynamoose';

@Module({
  imports: [
    ConfigProjModule,
    DynamooseModule.forRoot({
      aws: {
        accessKeyId: 'local',
        secretAccessKey: 'locale',
        region: 'us-east-1',
      },
      local: true,
      logger: false,
    }),
    UserModule,
    TaskModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
