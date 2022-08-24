import { Injectable } from '@nestjs/common';
import { InjectModel, Model } from 'nestjs-dynamoose';
import { Task, TaskKey } from '../../task/models/interfaces/task.interface';

@Injectable()
export class TaskRepository {
  constructor(
    @InjectModel('Task')
    private taskModel: Model<Task, TaskKey>,
  ) {}

  create(task: Task) {
    return this.taskModel.create(task);
  }

  update(key: TaskKey, task: Task) {
    return this.taskModel.update(key, task);
  }

  findOne(key: TaskKey) {
    return this.taskModel.get(key);
  }

  findAll() {
    return this.taskModel.scan().exec();
  }

  delete(key: TaskKey) {
    return this.taskModel.delete(key);
  }

  custom() {
    return this.taskModel.query().where('1').or().where('2');
  }
}
