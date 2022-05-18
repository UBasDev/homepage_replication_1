import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class HomepageNewReleasedService {

  constructor(@Inject('apiUrl') private apiUrl:string, private http:HttpClient) { }

  get_all_data():Observable<any[]>{
    return this.http.get<any[]>(this.apiUrl+'homepage_new_released');
  }
  get_new_released_header():Observable<any[]>{
    return this.http.get<any[]>(this.apiUrl+'homepage_new_released_header');
  }
}
