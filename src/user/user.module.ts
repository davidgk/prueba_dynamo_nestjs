import { Module } from '@nestjs/common';
import { DynamooseModule } from 'nestjs-dynamoose';
import { AuthenticationGuard } from '../auth/tokenVerification/auth.guard';
import { AuthModule } from '../auth/auth.module';
import { AuthenticationHandler } from '../auth/tokenVerification/auth.handler';
import { UserController } from './controllers/user.controller';
import { UserSchema } from './models/schemas/user.schema';
import { UserRepository } from './repositories/user.repository';
import { UserService } from './services/user.service';

const UserModel = { name: 'User', schema: UserSchema };

@Module({
  imports: [DynamooseModule.forFeature([UserModel]), AuthModule],
  controllers: [UserController],
  providers: [
    UserService,
    UserRepository,
    AuthenticationGuard,
    AuthenticationHandler,
  ],
})
export class UserModule {}
