import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class SoonService {

  constructor(private http:HttpClient) { }
  get_all_data():Observable<any[]>{
    return this.http.get<any[]>("http://localhost:3000/date_periods_soon");
  }
}
