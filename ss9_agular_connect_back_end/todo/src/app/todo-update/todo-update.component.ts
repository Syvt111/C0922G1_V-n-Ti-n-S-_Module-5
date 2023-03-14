import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {TodoService} from "../service/todo-service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";

@Component({
  selector: 'app-todo-update',
  templateUrl: './todo-update.component.html',
  styleUrls: ['./todo-update.component.css']
})
export class TodoUpdateComponent implements OnInit {
  todoForm: FormGroup;
  id: number;
  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private todoService: TodoService) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      this.todoService.findById(this.id).subscribe(todo => {
        this.todoForm = new FormGroup({
          id: new FormControl(todo.id),
          content: new FormControl(todo.content),
          complete: new FormControl(todo.complete)
        });
      });
    });
  }

  updateTodo() {
    this.todoService.update(this.id, this.todoForm.value).subscribe(() => {
      this.router.navigateByUrl('/todo');
    });
  }
}
