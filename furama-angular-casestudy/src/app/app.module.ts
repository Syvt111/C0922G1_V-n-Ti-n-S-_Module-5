import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HomeComponent } from './content/home/home.component';
import { FacilityComponent } from './content/facility/facility.component';
import { CustomerComponent } from './content/customer/customer.component';
import { ContractComponent } from './content/contract/contract.component';
import { FacilityListComponent } from './facility/facility-list/facility-list.component';
import { CustomerListComponent } from './cutomer/customer-list/customer-list.component';
import { ContractListComponent } from './contract/contract-list/contract-list.component';
import { CustomerCreateComponent } from './cutomer/customer-create/customer-create.component';
import {ReactiveFormsModule} from "@angular/forms";
import { CustomerUpdateComponent } from './cutomer/customer-update/customer-update.component';
import { ContractCreateComponent } from './contract/contract-create/contract-create.component';
import { ContractUpdateComponent } from './contract/contract-update/contract-update.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    FacilityComponent,
    CustomerComponent,
    ContractComponent,
    FacilityListComponent,
    CustomerListComponent,
    ContractListComponent,
    CustomerCreateComponent,
    CustomerUpdateComponent,
    ContractCreateComponent,
    ContractUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
