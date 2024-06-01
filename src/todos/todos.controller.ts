import { Body, Controller, Get, Post, Param } from '@nestjs/common';
import { TodosService } from './todos.service';
import { Todo } from './interfaces/todo.interface';

@Controller('todos')
export class TodosController {
    constructor(private readonly todoService: TodosService) {}

    @Get(':id')
    findOne(@Param('id') id: string) {}

    @Get()
    findAll(): Todo[] {
        return this.todoService.findAl();
    }

    @Post()
    createToDo(@Body() newToDo ) {
        this.todoService.create(newToDo);
    }
}
