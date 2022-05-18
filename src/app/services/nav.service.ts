import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class NavService {

  constructor(@Inject('apiUrl') private apiUrl:string, private http:HttpClient) { }

  get_registrations():Observable<any[]>{
    return this.http.get<any[]>(this.apiUrl+'nav_registrations')
  }

  get_all_data():Observable<any[]>{
    return this.http.get<any[]>(this.apiUrl+'nav_categories')
  }

}
