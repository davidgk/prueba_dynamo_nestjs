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
      local: Boolean(process.env.AWS_LOCAL),
      logger: false,
    }),
    UserModule,
    TaskModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
