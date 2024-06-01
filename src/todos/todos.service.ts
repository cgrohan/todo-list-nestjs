import { Injectable } from '@nestjs/common';

@Injectable()
export class TodosService {
    todos = [
        {
            id: 1,
            title: 'Manger des frites',
            description: 'Il faut manger des frites, mais pas trop souvent.'
        },
        {
            id: 2,
            title: 'Acheter du pain',
            description: 'Penser à acheter du pain.'
        }
    ];

    findAl(): any[] {
        return this.todos;
    }
}
