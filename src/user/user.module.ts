import { Module } from '@nestjs/common';
import { ConfigProjModule } from '../config/config.module';
import { UserDynamoRepository } from './entities/userDynamoRepository';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
  imports: [ConfigProjModule],
  controllers: [UserController],
  providers: [UserService, UserDynamoRepository],
})
export class UserModule {}
