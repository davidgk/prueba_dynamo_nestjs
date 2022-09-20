import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { ConfigProjectModule } from './config/config.module';
import { TaskModule } from './task/task.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [ConfigProjectModule, UserModule, TaskModule, AuthModule],
})
export class AppModule {}
