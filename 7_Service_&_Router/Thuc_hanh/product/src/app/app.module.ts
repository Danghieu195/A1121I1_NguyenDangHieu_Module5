import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product_funtion/product-list/product-list.component';
import { ProductCreateComponent } from './product_funtion/product-create/product-create.component';
import {ReactiveFormsModule} from "@angular/forms";
import { ProductEditComponent } from './product_funtion/product-edit/product-edit.component';
import { ProductDeleteComponent } from './product_funtion/product-delete/product-delete.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductCreateComponent,
    ProductEditComponent,
    ProductDeleteComponent
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
