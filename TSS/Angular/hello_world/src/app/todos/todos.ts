import { Component, inject, OnInit, signal } from '@angular/core';
import { TodosService } from '../services/todos-service';
import { Todo } from '../model/todo';
import { catchError } from 'rxjs';


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
    this.todoService.getTodosFromApi().pipe(
      catchError((err) => { 
        console.log(err); 
        throw err
  })
    ).subscribe((Todos) => {
      console.log("helllo")
      console.log(Todos)
      this.todoItems.set(Todos)
    })
  }


}
