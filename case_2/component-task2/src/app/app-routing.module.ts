import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListCustomerComponent } from './customer/component/list-customer/list-customer.component';
import {CreateCustomerComponent} from "./customer/component/create-customer/create-customer.component";
import {EditCustomerComponent} from "./customer/component/edit-customer/edit-customer.component";


const routes: Routes = [
  {path: 'customer', component: ListCustomerComponent},
  {
    path: 'customer/create',
    component: CreateCustomerComponent
  },
  {
    path: 'customer/edit/:id',
    component: EditCustomerComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
