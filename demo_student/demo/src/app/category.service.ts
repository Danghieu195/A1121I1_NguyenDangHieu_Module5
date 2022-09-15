import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ICategory} from "./model/ICategory";



@Injectable({
  providedIn: 'root'
})
export class CategoryService {

API_URL_TYPE = "http://localhost:3000/category";

  constructor(private http_type : HttpClient) { }

  getAllType() : Observable<ICategory[]>  {
    return this.http_type.get<ICategory[]>(this.API_URL_TYPE);
  }
}
