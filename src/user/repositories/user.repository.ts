import { Injectable } from '@nestjs/common';
import { InjectModel, Model } from 'nestjs-dynamoose';
import { User, UserKey } from '../models/interfaces/user.interface';

@Injectable()
export class UserRepository {
  constructor(
    @InjectModel('User')
    private userModel: Model<User, UserKey>,
  ) {}

  create(task: User) {
    return this.userModel.create(task);
  }

  update(key: UserKey, task: User) {
    return this.userModel.update(key, task);
  }

  findOne(key: UserKey) {
    return this.userModel.get(key);
  }

  findAll() {
    return this.userModel.scan().exec();
  }

  delete(key: UserKey) {
    return this.userModel.delete(key);
  }
}
