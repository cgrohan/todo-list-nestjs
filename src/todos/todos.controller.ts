import { Controller, Get } from '@nestjs/common';
import { TodosService } from './todos.service';
import { Todo } from './interfaces/todo.interface';

@Controller('todos')
export class TodosController {
    constructor(private readonly todoService: TodosService) {}

    @Get()
    findAll(): Todo[] {
        return this.todoService.findAl();
    }
}
