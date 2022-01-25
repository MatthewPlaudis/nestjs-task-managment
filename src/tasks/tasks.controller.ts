import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { Task } from './task.model';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
    constructor(private tasksService: TasksService){} // constructor(parameters){body}

    @Get()
    getAllTasks(): Task[] {
        return this.tasksService.getAllTasks();
    };

    @Get('/:id')
    getTaskById(@Param('id') id: string): Task {
        return this.tasksService.getTaskById(id);
    }

    @Post()
    createTask( @Body() createTaskDto: CreateTaskDto): Task { //when a req comes in handled by post, nestjs assigns body to this parameter
        return this.tasksService.createTask(createTaskDto);
    }

    @Delete('/:id')
    deleteTask(@Param('id') id: string): void {
        this.tasksService.DeleteTask(id);
    }
}

// for the route ./tasks, let this ^ controller handle it.