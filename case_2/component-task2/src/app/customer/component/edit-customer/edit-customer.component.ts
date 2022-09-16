import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CustomerType} from "../../model/customerType";
import {CustomerService} from "../../service/customer.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {CustomerTypeService} from "../../service/customer-type.service";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.css']
})
export class EditCustomerComponent implements OnInit {

  customerForm : FormGroup  = new FormGroup({
    id: new FormControl('',
      Validators.compose([Validators.required])),

    customerName: new FormControl('',
      Validators.required),

    dateOfBirth: new FormControl('',
      Validators.compose([Validators.required, Validators.pattern("^(\\d){4}-(\\d){2}-(\\d){2}$")])),

    sex: new FormControl(),

    identityNumber: new FormControl('',
      Validators.compose([Validators.required, Validators.pattern("^((\\d){9}|(\\d){12})$")])),

    phoneNumber: new FormControl('',
      Validators.compose([Validators.required, Validators.pattern("^(\\(84\\)\\+|0)(90|91)(\\d){7}$")])),

    email: new FormControl('',
      Validators.compose([Validators.required, Validators.email])),

    address: new FormControl('',
      Validators.required),

    customerType: new FormControl('',
      Validators.required)
  });

  customerTypes: CustomerType[];
  id: string;

  constructor(private customerService: CustomerService,
              private customerTypeService: CustomerTypeService,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              private snackBar: MatSnackBar) { }


  ngOnInit(): void {
    this.getType();

    this.customerService.findCustomerById(this.activatedRoute.snapshot.params.id).subscribe((data) => {
      this.customerForm.setValue(data);
    });
    this.customerTypeService.getAllCustomerTypes().subscribe((data) => {
      this.customerTypes = data;
    });
  }
  getType() {
    this.customerTypeService.getAllCustomerTypes().subscribe((res) => {
      this.customerTypes = res;
    });
  }

  updateCustomer() {
    this.customerService.updateCustomer(this.activatedRoute.snapshot.params.id, this.customerForm.value).subscribe(
      (data) => {
        this.router.navigateByUrl('customer');
        this.snackBar.open('Update successfully!', 'ok');
      });
  }



}
