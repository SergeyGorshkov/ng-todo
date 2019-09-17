import { Component, OnInit } from '@angular/core';
import { TodoService } from '../shared/todos.service';
import {delay} from 'rxjs/operators';


@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  private loading: boolean = true;
  private searchString: string = '';

  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.todoService.fetchTodos()
      .pipe(delay(2000))
      .subscribe(() => {
        this.loading = false;
      })
  }

  onChange(id: number) {
    this.todoService.onToggle(id);
  }

  removeTodo(id: number) {
    this.todoService.removeTodo(id);
  }
}
