import { Injectable } from '@nestjs/common';
import { Todo } from './interfaces/todo.interface';

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

    create(todo: Todo) {
        this.todos = [...this.todos, todo];
    }
}
