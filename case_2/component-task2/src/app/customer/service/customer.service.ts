import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Customer} from "../model/customer";



@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  API_URL = "http://localhost:3000/customers";

  constructor(private http: HttpClient) { }

    getAllCustomers(): Observable<Customer[]> {
      return this.http.get<Customer[]>(this.API_URL);
    }

  delete(id: string) {
    return this.http.delete(this.API_URL + '/' + id);
  }

  saveCustomer(customer): Observable<Customer> {
    return this.http.post<Customer>(this.API_URL, customer);
  }

  findCustomerById(id: string): Observable<Customer> {
    return this.http.get<Customer>(`${this.API_URL}/${id}`);
  }

  updateCustomer(id: string, customer: Customer): Observable<Customer> {
    return this.http.put<Customer>(this.API_URL + '/' + id, customer);
  }
}


