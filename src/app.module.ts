import { Module } from '@nestjs/common';
import { ConfigProjectModule } from './config/config.module';
import { UserModule } from './user/user.module';
import { TaskModule } from './task/task.module';
import { AdminModule } from '@adminjs/nestjs';
import { getModelToken, Model } from 'nestjs-dynamoose';
import { User, UserKey } from './user/models/interfaces/user.interface';
@Module({
  imports: [
    ConfigProjectModule,
    AdminModule.createAdminAsync({
      imports: [UserModule],
      inject: [getModelToken('User')],
      useFactory: (userModel: Model<User, UserKey>) => ({
        adminJsOptions: {
          rootPath: '/admin',
          databases: [],
        },
      }),
    }),
    UserModule,
    TaskModule,
  ],
})
export class AppModule {}
