import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ListServiceComponent } from './list-service/list-service.component';
import { EidtServiceComponent } from './eidt-service/eidt-service.component';
import { CreateServiceComponent } from './create-service/create-service.component';
import { ListCustomerComponent } from './list-customer/list-customer.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent, NavbarComponent, FooterComponent, ListServiceComponent, EidtServiceComponent, CreateServiceComponent, ListCustomerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
