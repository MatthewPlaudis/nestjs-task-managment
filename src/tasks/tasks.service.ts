import { Injectable } from '@nestjs/common';
import { Task, TaskStatus } from './task.model';
import { v4 as uuid} from 'uuid'
import { CreateTaskDto } from './dto/create-task.dto';

@Injectable()
export class TasksService {
    private tasks : Task[] = []; //an array of type task

    public getAllTasks(): Task[] {
        return this.tasks;
        // can't directly edit tasks but created a method that can read from it
    };

    //create a task
    createTask(_createTaskDto: CreateTaskDto): Task {
        //es6 destructuring syntax
        const { title, description } = _createTaskDto; 
       
        const task : Task = {
            id: uuid(), // want to auto-generate using uuid
            title,
            description,
            status: TaskStatus.OPEN,

        };

        this.tasks.push(task);
        return task;
    };

    getTaskById(id : string) : Task {
        // for(let t of this.tasks){
        //     if(t.id === id){
        //         return t;
        //     }
        // }

        return this.tasks.find((task) => task.id === id);
    };

    DeleteTask(id : string): void {
        this.tasks = this.tasks.filter((task) => task.id !== id);
    };
}

