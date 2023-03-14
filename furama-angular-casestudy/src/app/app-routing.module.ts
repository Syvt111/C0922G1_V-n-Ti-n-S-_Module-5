import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CustomerCreateComponent} from "./cutomer/customer-create/customer-create.component";
import {CustomerListComponent} from "./cutomer/customer-list/customer-list.component";
import {ContractUpdateComponent} from "./contract/contract-update/contract-update.component";
import {ContractCreateComponent} from "./contract/contract-create/contract-create.component";
import {ContractListComponent} from "./contract/contract-list/contract-list.component";


const routes: Routes = [{
  path:'/customer/list',
  component:CustomerListComponent
},{
  path:'/customer/create',
  component:CustomerCreateComponent
},{
  path:'/customer/update/:id',
  component:CustomerCreateComponent
},{
  path:'/contract/update/:id',
  component:ContractUpdateComponent
},{
  path:'/contract/create',
  component:ContractCreateComponent
},{
  path:'/contract/list',
  component:ContractListComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
