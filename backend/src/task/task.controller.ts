import { Controller, Get, Post, Body } from '@nestjs/common';
import { TaskService } from './task.service';

@Controller('tasks')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Get()
  getTasks() {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return this.taskService.getTasks();
  }

  @Post()
  createTask(@Body() body: { name: string; description: string }) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return this.taskService.createTask(body);
  }
}
