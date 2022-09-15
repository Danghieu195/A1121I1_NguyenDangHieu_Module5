import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {CustomerType} from "../model/customerType";

@Injectable({
  providedIn: 'root'
})
export class CustomerTypeService {

  API_URL_TYPE = "http://localhost:3000/customerTypes";

  constructor(private http_type: HttpClient) {
  }

  getAllCustomerTypes(): Observable<CustomerType[]> {
    return this.http_type.get<CustomerType[]>(this.API_URL_TYPE);
  }

}

