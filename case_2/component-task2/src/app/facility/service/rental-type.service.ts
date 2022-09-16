import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {RentalType} from "../model/rental-type";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class RentalTypeService {

  API_URL_REN = "http://localhost:3000/rentalTypes";

  constructor(private http : HttpClient) { }

  getAllRentalTypes(): Observable<RentalType[]> {
    return this.http.get<RentalType[]>(this.API_URL_REN);
  }
}
