import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ConfigProjectModule } from './config/config.module';
import { FileToS3Module } from './fileUploading/fileToS3.module';
import { UserModule } from './user/user.module';
import { TaskModule } from './task/task.module';

@Module({
  imports: [ConfigProjectModule, UserModule, TaskModule, FileToS3Module],
  controllers: [AppController],
})
export class AppModule {}
