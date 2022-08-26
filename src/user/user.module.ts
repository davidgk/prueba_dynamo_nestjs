import { Module } from '@nestjs/common';
import { DynamooseModule } from 'nestjs-dynamoose';
import { UserController } from './controllers/user.controller';
import { UserSchema } from './models/schemas/user.schema';
import { UserRepository } from './repositories/user.repository';
import { UserService } from './services/user.service';

const UserModel = { name: 'User', schema: UserSchema };

@Module({
  imports: [DynamooseModule.forFeature([UserModel])],
  controllers: [UserController],
  providers: [UserService, UserRepository],
})
export class UserModule {}
