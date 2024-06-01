import { Injectable, NotFoundException } from '@nestjs/common';
import { Todo } from './interfaces/todo.interface';
import { CreateTodoDto } from './dto/create-todo.dto';

@Injectable()
export class TodosService {
    todos: Todo[] = [
        {
            id: 1,
            title: 'Manger des frites',
            description: 'Il faut manger des frites, mais pas trop souvent.',
            done: false,
        },
        {
            id: 2,
            title: 'Acheter du pain',
            description: 'Penser à acheter du pain.',
            done: true,
        },
        {
            id: 3,
            title: 'Acheter du vin',
            description: 'Penser à acheter du vin.',
            done: true,
        }
    ];

    findAl(): Todo[] {
        return this.todos;
    }

    findOn(id: string) {
        return this.todos.find(todo => todo.id === Number(id))
    }

    create(todo: CreateTodoDto) {
        this.todos = [...this.todos, todo];
    }

    update(id: string, todo: Todo) {
        const todoToUpdate = this.todos.find(todo => todo.id === Number(id));
        if(!todoToUpdate) {
            return new NotFoundException('Je ne trouve pas cette tâche.');
        }

        if (todo.hasOwnProperty('done')) {
            todoToUpdate.done = todo.done;
        }

        if (todo.title) {
            todoToUpdate.title = todo.title;
        }

        if (todo.description) {
            todoToUpdate.description = todo.description;
        }

        const updatedTodos = this.todos.map(todo => todo.id !== Number(id) ? todo : todoToUpdate);
        this.todos = [...updatedTodos];
        return {updatedTodo: 1, todo: todoToUpdate};
    }

    delete(id: string) {
        const nbOfTodosBeforeDelete = this.todos.length;
        this.todos = this.todos.filter(todo => todo.id !== Number(id))
        if(this.todos.length < nbOfTodosBeforeDelete) {
            return { deletedTodos: 1, nbTodos: this.todos.length };
        } else {
            return { deletedTodos: 0, nbTodos: this.todos.length };
        }
    }
}
