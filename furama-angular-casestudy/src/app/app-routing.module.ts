import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CustomerCreateComponent} from "./cutomer/customer-create/customer-create.component";
import {CustomerListComponent} from "./cutomer/customer-list/customer-list.component";


const routes: Routes = [{
  path:'/customer',
  component:CustomerListComponent
},{
  path:'/customer/create',
  component:CustomerCreateComponent
},{
  path:'/customer/update/:id',
  component:CustomerCreateComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
