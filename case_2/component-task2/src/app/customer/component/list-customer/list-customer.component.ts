import { Component, OnInit } from '@angular/core';
import {Customer} from "../../model/customer";
import {CustomerService} from "../../service/customer.service";
import { Router } from '@angular/router';
import {DeleteCustomerComponent} from "../delete-customer/delete-customer.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-list-customer',
  templateUrl: './list-customer.component.html',
  styleUrls: ['./list-customer.component.css']
})
export class ListCustomerComponent implements OnInit {
  customers: Customer[];
  customer: Customer;

  constructor(private customerService: CustomerService,
              private router: Router,
              private dialog: MatDialog) { }

  ngOnInit(): void {
    this.getAllCustomers();
  }

  getAllCustomers() {
    this.customerService.getAllCustomers().subscribe(customers => {
      this.customers = customers;
      console.log('list customers success!');
    }, error => {
      console.log(error);
    })
  }

  openDialogDelete(customerID: string) {
    this.customerService.findCustomerById(customerID).subscribe(data => {
      const dialogRef = this.dialog.open(DeleteCustomerComponent, {
        width : '700px',
        data: {data1 : data}
      });
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed successfully');
        this.ngOnInit();
      });
    });
  }
}
