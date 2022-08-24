import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { UserDynamoRepository } from './entities/userDynamoRepository';

@Injectable()
export class UserService {
  constructor(private userRepository: UserDynamoRepository) {
  }
  async create(createUserDto: CreateUserDto) {
    const newUser = new User();
    newUser.id = randomUUID();
    newUser.name = createUserDto.name;
    newUser.age = createUserDto.age;
    const userCreated = await this.userRepository.putUser(newUser);
    console.log(userCreated);
    return userCreated;
  }

  async findAll() {
    return { users: [...(await this.userRepository.getAllUser()).Items] };
  }

  async findOne(id: string) {
    return { ...(await this.userRepository.getUserById(id)) }.Item;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  async remove(id: string) {
    return { ...(await this.userRepository.deleteUserById(id)) };
  }
}
