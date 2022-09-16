import {Component, Inject, OnInit} from '@angular/core';
import {CustomerService} from "../../service/customer.service";
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {MatSnackBar} from '@angular/material/snack-bar';
import {Router, ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-delete-customer',
  templateUrl: './delete-customer.component.html',
  styleUrls: ['./delete-customer.component.css']
})
export class DeleteCustomerComponent implements OnInit {

  nameCustomer: any;
  idCustomer: any;

  constructor(public dialogRef: MatDialogRef<DeleteCustomerComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private customerService: CustomerService,
              private snackBar: MatSnackBar,
              private router: Router,
              private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.nameCustomer = this.data.data1.customerName;
    this.idCustomer = this.data.data1.id;
  }

  deleteCustomer() {
    this.customerService.delete(this.idCustomer).subscribe(data => {
      console.log('Deleted');
      this.dialogRef.close();
      this.snackBar.open('Delete student successfully', 'oke');
    });
  }

}
