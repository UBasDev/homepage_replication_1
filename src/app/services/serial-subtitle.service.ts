import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { concatMap, generate, map, Observable, range } from 'rxjs';

@Injectable()
export class SerialSubtitleService {
  constructor(private http: HttpClient) {}
  get_all_data(): Observable<any[]> {
    return this.http.get<any[]>(
      'http://localhost:3000/date_periods_serial_subtitle'
    );
  }
  get_film_subtitles():Observable<any[]> {
    return this.http
      .get<any[]>('http://localhost:3000/date_periods_serial_subtitle');
  }

}
