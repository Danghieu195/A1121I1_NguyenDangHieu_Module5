import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Facility} from "../model/facility";



@Injectable({
  providedIn: 'root'
})
export class FacilityService {

  API_URL_FAC = "http://localhost:3000/facilities";

  constructor(private http : HttpClient) { }

  getAllFacilities(): Observable<Facility[]> {
    return this.http.get<Facility[]>(this.API_URL_FAC);
  }

  saveFacility(facility): Observable<Facility> {
    return this.http.post<Facility>(this.API_URL_FAC, facility);
  }
}
