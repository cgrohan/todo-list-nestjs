import { Body, Controller, Get, Post, Param, Patch } from '@nestjs/common';
import { TodosService } from './todos.service';
import { Todo } from './interfaces/todo.interface';
import { CreateTodoDto } from './dto/create-todo.dto';

@Controller('todos')
export class TodosController {
    constructor(private readonly todoService: TodosService) {}

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.todoService.findOn(id);
    }

    @Get()
    findAll(): Todo[] {
        return this.todoService.findAl();
    }

    @Post()
    createToDo(@Body() newToDo: CreateTodoDto) {
        this.todoService.create(newToDo);
    }

    @Patch(':id')
    updateToDo(@Param('id') id: string, @Body() todo: CreateTodoDto) {
        return this.todoService.update(id, todo);
    }
}
