import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Task, TaskKey } from '../models/interfaces/task.interface';
import { TaskService } from '../services/task.service';

@Controller('task')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Get()
  findAll() {
    return this.taskService.findAll();
  }

  @Get('custom')
  custom() {
    return this.taskService.custom();
  }

  @Get(':id')
  findOne(@Param('id') id: TaskKey) {
    return this.taskService.findOne(id);
  }

  @Post()
  async create(@Body() task: Task) {
    return await this.taskService.create(task);
  }

  @Put(':id')
  update(@Param('id') id: TaskKey, @Body() task: Task) {
    return this.taskService.update(id, task);
  }

  @Delete(':id')
  delete(@Param('id') id: TaskKey) {
    return this.taskService.delete(id);
  }
}
