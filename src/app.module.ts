import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ConfigProjectModule } from './config/config.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [ConfigProjectModule, UserModule],
  controllers: [AppController],
})
export class AppModule {}
