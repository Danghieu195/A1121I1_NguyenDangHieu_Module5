import { Component, OnInit } from '@angular/core';
import {CustomerType} from "../../../customer/model/customerType";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CustomerService} from "../../../customer/service/customer.service";
import {CustomerTypeService} from "../../../customer/service/customer-type.service";
import {Router} from "@angular/router";
import {RentalType} from "../../model/rental-type";
import {ServiceType} from "../../model/service-type";
import {RentalTypeService} from "../../service/rental-type.service";
import {ServiceTypeService} from "../../service/service-type.service";
import {FacilityService} from "../../service/facility.service";

@Component({
  selector: 'app-create-service',
  templateUrl: './create-service.component.html',
  styleUrls: ['./create-service.component.css']
})
export class CreateServiceComponent implements OnInit {
  rentalTypes: RentalType[];
  serviceTypes: ServiceType[];

  facilityForm: FormGroup = new FormGroup({
    serviceId: new FormControl('',
      Validators.compose([Validators.required])),

    serviceName: new FormControl('',
      Validators.required),

    rentalType: new FormControl('', [Validators.required]),

    serviceType: new FormControl('', [Validators.required]),
  });
  constructor(private serviceTypesService: ServiceTypeService,
              private rentalTypesService : RentalTypeService,
              private facilityService : FacilityService,
              private router: Router) { }

  ngOnInit(): void {
    this.getAllRentalTypes();
    this.getAllServiceTypes();
  }

  getAllRentalTypes() {
    this.rentalTypesService.getAllRentalTypes().subscribe(rentalTypes => {
      this.rentalTypes= rentalTypes;
    });
  }

  getAllServiceTypes() {
    this.serviceTypesService.getAllServiceTypes().subscribe(serviceTypes => {
      this.serviceTypes= serviceTypes;
    });
  }

  addFacility() {
    const facility = this.facilityForm.value;
    if (this.facilityForm.valid) {
      this.facilityService.saveFacility(facility).subscribe(() => {
        this.facilityForm.reset();
        console.log('add facility success!');
        this.router.navigateByUrl('/service').then(r => console.log('back to service list!'));
      }, error => {
        console.log(error);
      })
    }
  }

}
