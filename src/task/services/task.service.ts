import { Injectable } from '@nestjs/common';
import { Task, TaskKey } from '../../task/models/interfaces/task.interface';
import { TaskRepository } from '../repositories/task.repository';

@Injectable()
export class TaskService {
  constructor(private readonly taskRepository: TaskRepository) {}

  create(task: Task) {
    return this.taskRepository.create(task);
  }

  update(key: TaskKey, task: Task) {
    return this.taskRepository.update(key, task);
  }

  findOne(key: TaskKey) {
    return this.taskRepository.findOne(key);
  }

  findAll() {
    return this.taskRepository.findAll();
  }

  delete(key: TaskKey) {
    return this.taskRepository.delete(key);
  }

  custom() {
    return this.taskRepository.custom();
  }
}
