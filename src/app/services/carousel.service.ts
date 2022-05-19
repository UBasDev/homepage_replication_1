import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

//THIS SERVICE IS NOT GLOBAL!
@Injectable()
export class CarouselService {

  constructor(private http:HttpClient) { }
  get_carousel_header():Observable<any[]>{
    return this.http.get<any[]>("http://localhost:8000/homepage_carousel_header");
  }
  get_carousel_data():Observable<any[]>{
    return this.http.get<any[]>("http://localhost:8000/homepage_carousel");
  }
}
