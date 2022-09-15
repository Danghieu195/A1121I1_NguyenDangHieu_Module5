import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ListCustomerComponent } from './customer/component/list-customer/list-customer.component';
import { CreateCustomerComponent } from './customer/component/create-customer/create-customer.component';
import {HttpClientModule} from "@angular/common/http";
import { DeleteCustomerComponent } from './customer/component/delete-customer/delete-customer.component';
import {MatDialogModule} from "@angular/material/dialog";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { EditCustomerComponent } from './customer/component/edit-customer/edit-customer.component';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ListCustomerComponent,
    CreateCustomerComponent,
    DeleteCustomerComponent,
    EditCustomerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
