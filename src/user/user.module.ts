import { Module } from '@nestjs/common';
import { DynamooseModule } from 'nestjs-dynamoose';
import { UserController } from './controllers/user.controller';
import { UserModel } from './models/schemas/user.schema';
import { UserRepository } from './repositories/user.repository';
import { UserService } from './services/user.service';

@Module({
  imports: [DynamooseModule.forFeature([UserModel])],
  controllers: [UserController],
  providers: [UserService, UserRepository],
})
export class UserModule {}
