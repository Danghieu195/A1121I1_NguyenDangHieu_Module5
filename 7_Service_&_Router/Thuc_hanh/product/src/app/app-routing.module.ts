import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductListComponent} from "./product_funtion/product-list/product-list.component";
import {ProductCreateComponent} from "./product_funtion/product-create/product-create.component";
import {ProductDeleteComponent} from "./product_funtion/product-delete/product-delete.component";
import {ProductEditComponent} from "./product_funtion/product-edit/product-edit.component";


const routes: Routes = [
  {
  path : '',
  component: ProductListComponent
},
  {
    path : 'product/create',
    component: ProductCreateComponent
  },
  {
    path : 'product/delete',
    component: ProductDeleteComponent
  },

  {
    path : 'product/edit',
    component: ProductEditComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
