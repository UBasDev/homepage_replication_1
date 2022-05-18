import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-top-banner',
  templateUrl: './top-banner.component.html',
  styleUrls: ['./top-banner.component.css']
})
export class TopBannerComponent implements OnInit {

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.img_path = this.http.get<any[]>('http://localhost:3000/top_banner_path')
  }
  img_path!:Observable<any[]>;
}
