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
        accessKeyId: process.env.AWS_ID,
        secretAccessKey: process.env.AWS_SECRET,
        region: process.env.AWS_REGION,
      },
      local: process.env.NODE_ENV === 'dev',
      logger: process.env.NODE_ENV === 'dev',
    }),
    UserModule,
    TaskModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
