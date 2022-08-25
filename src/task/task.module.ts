import { Module } from '@nestjs/common';
import { DynamooseModule } from 'nestjs-dynamoose';
import { TaskSchema } from './models/schemas/task.schema';
import { TaskService } from './services/task.service';
import { TaskController } from './controllers/task.controller';
import { TaskRepository } from './repositories/task.repository';

@Module({
  imports: [
    DynamooseModule.forFeature([
      {
        name: 'Task',
        schema: TaskSchema,
      },
    ]),
  ],
  providers: [TaskService, TaskRepository],
  controllers: [TaskController],
})
export class TaskModule {}
