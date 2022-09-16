import { Component, OnInit } from '@angular/core';
import {Facility} from "../../model/facility";
import {FacilityService} from "../../service/facility.service";

@Component({
  selector: 'app-list-service',
  templateUrl: './list-service.component.html',
  styleUrls: ['./list-service.component.css']
})
export class ListServiceComponent implements OnInit {

  facilities: Facility[];
  constructor(private facilityService: FacilityService) { }

  ngOnInit() {
    this.facilityService.getAllFacilities().subscribe(facilities => {
      this.facilities = facilities;
      console.log('list facilities success!');
    }, error => {
      console.log(error);
    })
  }

}
