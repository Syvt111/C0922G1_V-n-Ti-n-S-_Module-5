import {Component, OnInit} from '@angular/core';
import {Todo} from '../model/todo';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {TodoService} from "../service/todo-service";
import {Router} from "@angular/router";

let _id = 1;

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todos: Todo[] = [];
  content = new FormControl();

  constructor(private todoService: TodoService,
              private router: Router) {
  }

  ngOnInit() {
    this.todoService.getAll().subscribe(next => {
      this.todos = next;
    })
  }

  toggleTodo(i: number) {
    this.todos[i].complete = !this.todos[i].complete;
  }

  change() {
    const value = this.content.value;
    if (value) {
      const todo: Todo = {
        id: _id++,
        content: value,
        complete: false
      };
     this.todoService.save(todo).subscribe(() =>{
       this.router.navigateByUrl("/todo")
     });
    }
  }
}
