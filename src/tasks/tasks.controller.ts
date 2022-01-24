import { Body, Controller, Get, Post } from '@nestjs/common';
import { Task } from './task.model';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
    constructor(private tasksService: TasksService){} // constructor(parameters){body}

    @Get()
    getAllTasks(): Task[] {
        return this.tasksService.getAllTasks();
    };

    @Post()
    createTask(@Body('title') _title: string, @Body('description') _description: string,): Task { //when a req comes in handled by post, nestjs assigns body to this parameter
        return this.tasksService.createTask(_title, _description);
    };
}

// for the route ./tasks, let this ^ controller handle it.