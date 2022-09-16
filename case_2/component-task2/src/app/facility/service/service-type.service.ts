import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from "rxjs";
import {ServiceType} from "../model/service-type";

@Injectable({
  providedIn: 'root'
})
export class ServiceTypeService {

  API_URL_SER = "http://localhost:3000/serviceTypes";
  constructor(private http: HttpClient) { }

  getAllServiceTypes(): Observable<ServiceType[]> {
    return this.http.get<ServiceType[]>(this.API_URL_SER);
  }
}
