import { ServiceOutputTypes } from '@aws-sdk/lib-dynamodb';
import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';
import {
  deleteUserById,
  getAllUser,
  getUserById,
  putUser,
} from '../config/db/models/userDynamoRepository';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  async create(createUserDto: CreateUserDto) {
    const newUser = new User();
    newUser.id = randomUUID();
    newUser.name = createUserDto.name;
    newUser.age = createUserDto.age;
    const userCreated = await putUser(newUser);
    console.log(userCreated);
    return userCreated;
  }

  async findAll() {
    return { users: [...(await getAllUser()).Items] };
  }

  async findOne(id: string) {
    return { ...(await getUserById(id)) }.Item;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  async remove(id: string) {
    return { ...(await deleteUserById(id)) };
  }
}
