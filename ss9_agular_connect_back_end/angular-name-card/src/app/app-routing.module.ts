import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TodoComponent} from './todo/todo.component';
import {TodoUpdateComponent} from './todo-update/todo-update.component';
import {TodoDeleteComponent} from './todo-delete/todo-delete.component';


const routes: Routes = [
  {
    path: '/todos',
    component: TodoComponent
  }, {
    path: '/update/:id',
    component: TodoUpdateComponent
  }, {
    path: '/delete/:id',
    component: TodoDeleteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
