import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class HomepageFilmAnalysisService {

  constructor(@Inject('apiUrl') private apiUrl:string, private http:HttpClient) { }

  get_header():Observable<any[]>{
    return this.http.get<any[]>(this.apiUrl+'homepage_film_analysis_header')
  }

  get_all_data():Observable<any[]>{
    return this.http.get<any[]>(this.apiUrl+'homapage_film_analysis')
  }
}
