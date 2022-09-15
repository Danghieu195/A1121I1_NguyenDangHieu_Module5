import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IStudent} from "./model/IStudent";

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  API_URL = 'http://localhost:3000/student';

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<IStudent[]> {
    return this.http.get<IStudent[]>(this.API_URL);
  }

  create(student: IStudent) {
    return this.http.post<IStudent>(this.API_URL, student);
  }

  update(id: string, student: IStudent) {
    return this.http.put(`${this.API_URL}/${id}`, student);
  }

  findById(id: string): Observable<IStudent[]> {
    return this.http.get<IStudent[]>(`${this.API_URL}/${id}`);
  }

  delete(id: string) {
    return this.http.delete(this.API_URL + '/' + id);
  }
 }
