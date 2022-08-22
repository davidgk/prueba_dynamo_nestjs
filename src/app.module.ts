import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigProjModule } from './config/config.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [ConfigProjModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
