## Angular Service

Angular services are used to encapsulate data, making HTTP Calls,or performing any task that is not related directly to data rendering (in my opinion).

ng g services __name-service__

or

ng g s services/todos

model/todo.ts

```
export type Todo = {
    userId: number;
    completed: boolean;
    title: string;
    id: number;
};
```

services/todos-service.ts:

```
import { Injectable } from '@angular/core';
import { Todo } from '../model/todo';


@Injectable({
  providedIn: 'root',
})
export class TodosService {
  todoItems: Array<Todo> = [{
    title: 'groceries',
    id: 0,
    userId: 1,
    completed : false
  },
  {
    title: 'car wash',
    id: 1,
    userId: 1,
    completed: true
  }
] 
constructor() {

  }
}
```

todos:

todos.ts:
```
import { Component, inject, OnInit, signal } from '@angular/core';
import { TodosService } from '../services/todos-service';
import { Todo } from '../model/todo';


@Component({
  selector: 'app-todos',
  imports: [],
  templateUrl: './todos.html',
  styleUrl: './todos.scss',
})
export class Todos implements OnInit {
  todoService = inject(TodosService);
  todoItems = signal<Array<Todo>>([]);

  ngOnInit(): void {
    console.log(this.todoService.todoItems);
    this.todoItems.set(this.todoService.todoItems);
  }

}
```

todos.html

```
<p>todos works!</p>
<!-- <p> {{todoService.todoItems[0].title}}</p> -->
 <!-- <p> {{todoItems()[0].title}}</p> -->

@for (todo of todoItems(); track todo.id) {
    <p> {{todo.title}} </p>
}
```