import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListCustomerComponent } from './customer/component/list-customer/list-customer.component';
import {CreateCustomerComponent} from "./customer/component/create-customer/create-customer.component";
import {EditCustomerComponent} from "./customer/component/edit-customer/edit-customer.component";
import {DeleteCustomerComponent} from "./customer/component/delete-customer/delete-customer.component";
import {ListServiceComponent} from "./facility/component/list-service/list-service.component";
import { CreateServiceComponent } from './facility/component/create-service/create-service.component';


const routes: Routes = [
  {path: 'customer', component: ListCustomerComponent},
  {
    path: 'customer/create',
    component: CreateCustomerComponent
  },
  {
    path: 'customer/edit/:id',
    component: EditCustomerComponent
  },
  {path: 'service', component: ListServiceComponent},
  {
    path: 'create-service',
    component: CreateServiceComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
