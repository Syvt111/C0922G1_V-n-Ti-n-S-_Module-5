import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CustomerCreateComponent} from "./cutomer/customer-create/customer-create.component";
import {CustomerListComponent} from "./cutomer/customer-list/customer-list.component";
import {ContractUpdateComponent} from "./contract/contract-update/contract-update.component";
import {ContractCreateComponent} from "./contract/contract-create/contract-create.component";
import {ContractListComponent} from "./contract/contract-list/contract-list.component";
import {FacilityListComponent} from "./facility/facility-list/facility-list.component";
import {FacilityCreateComponent} from "./facility/facility-create/facility-create.component";

import {HomeComponent} from "./home/home.component";

const routes: Routes = [{
  path:'home',
  component:HomeComponent
},{
  path:'customer/list',
  component:CustomerListComponent
},{
  path:'customer/create',
  component:CustomerCreateComponent
},{
  path:'customer/update/:id',
  component:CustomerCreateComponent
},{
  path:'contract/update/:id',
  component:ContractUpdateComponent
},{
  path:'contract/create',
  component:ContractCreateComponent
},{
  path:'facility/list',
  component:FacilityListComponent
},{
  path:'facility/create',
  component:FacilityCreateComponent
},{
  path:'facility/update/:id',
  component:Facility
},{
  path:'contract/list',
  component:ContractListComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
