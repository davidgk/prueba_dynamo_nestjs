import { Module } from '@nestjs/common';
import { DynamooseModule } from 'nestjs-dynamoose';
import { TaskSchema } from './models/schemas/task.schema';
import { TaskService } from './services/task.service';
import { TaskController } from './controllers/task.controller';

@Module({
  imports: [
    DynamooseModule.forFeature([
      {
        name: 'Task',
        schema: TaskSchema,
      },
    ]),
  ],
  providers: [TaskService],
  controllers: [TaskController],
})
export class TaskModule {}
