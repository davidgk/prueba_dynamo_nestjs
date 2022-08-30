import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { User, UserKey } from '../models/interfaces/user.interface';
import { UserRepository } from '../repositories/user.repository';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  create(user: User) {
    return this.userRepository.create({ ...user, id: randomUUID() });
  }

  update(key: UserKey, user: User) {
    return this.userRepository.update(key, user);
  }

  findOne(key: UserKey) {
    return this.userRepository.findOne(key);
  }

  findAll() {
    return this.userRepository.findAll();
  }

  delete(key: UserKey) {
    return this.userRepository.delete(key);
  }
}
