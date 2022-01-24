import { Injectable } from '@nestjs/common';
import { Task, TaskStatus } from './task.model';
import { v4 as uuid} from 'uuid'

@Injectable()
export class TasksService {
    private tasks : Task[] = []; //an array of type task

    public getAllTasks(): Task[] {
        return this.tasks;
        // can't directly edit tasks but created a method that can read from it
    };

    //create a task
    createTask(title: string, description: string): Task {
        const task : Task = {
            id: uuid(), // want to auto-generate using uuid
            title,
            description,
            status: TaskStatus.OPEN

        };

        this.tasks.push(task);
        return task;
    };
}

