import { Component, OnInit } from '@angular/core';
import {CustomerType} from "../../model/customerType";
import { FormControl, FormGroup, Validators} from "@angular/forms";
import {CustomerService} from "../../service/customer.service";
import {CustomerTypeService} from "../../service/customer-type.service";
import {Router} from "@angular/router";
import {Customer} from "../../model/customer";

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent implements OnInit {
  customerTypes: CustomerType[];

  customerForm: FormGroup = new FormGroup({
    id: new FormControl('',
      Validators.compose([Validators.required])),

    customerName: new FormControl('',
      Validators.required),

    dateOfBirth: new FormControl('',
      Validators.compose([Validators.required,Validators.pattern("^(\\d){4}-(\\d){2}-(\\d){2}$")])),

    sex: new FormControl(),

    identityNumber: new FormControl('',
      Validators.compose([Validators.required,Validators.pattern("^((\\d){9}|(\\d){12})$")])),

    phoneNumber: new FormControl('',
      Validators.compose([Validators.required,Validators.pattern("^(\\(84\\)\\+|0)(90|91)(\\d){7}$")])),

    email: new FormControl('',
      Validators.compose([Validators.required,Validators.email])),

    address: new FormControl('',
      Validators.required),

    customerType: new FormControl('',
      Validators.required)
  });
  constructor(private customerService: CustomerService,
              private customerTypeService: CustomerTypeService,
              private router: Router) { }

  ngOnInit(): void {
    this.getAllCustomerTypes();
  }

  getAllCustomerTypes() {
    this.customerTypeService.getAllCustomerTypes().subscribe(customerTypes => {
      this.customerTypes = customerTypes;
    });
  }

  addCustomer() {
    const customer = this.customerForm.value;
    if (this.customerForm.valid) {
      this.customerService.saveCustomer(customer).subscribe(() => {
        this.customerForm.reset();
        console.log('add customer success!');
        this.router.navigateByUrl('/customer').then(r => console.log('back to customer list!'));
      }, error => {
        console.log(error);
      })
    }
  }

}
