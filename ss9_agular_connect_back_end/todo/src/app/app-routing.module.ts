import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TodoComponent} from "./todo/todo.component";
import {TodoUpdateComponent} from "./todo-update/todo-update.component";
import {TodoDeleteComponent} from "./todo-delete/todo-delete.component";


const routes: Routes = [{
  path: '/todo',
  component: TodoComponent
}, {
  path: 'todo/update/:id',
  component: TodoUpdateComponent
}, {
  path: 'todo/delete/:id',
  component: TodoDeleteComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
