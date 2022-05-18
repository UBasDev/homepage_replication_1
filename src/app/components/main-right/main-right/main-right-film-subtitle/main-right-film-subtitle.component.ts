import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-right-film-subtitle',
  templateUrl: './main-right-film-subtitle.component.html',
  styleUrls: ['./main-right-film-subtitle.component.css']
})
export class MainRightFilmSubtitleComponent implements OnInit {

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.http.get("http://localhost:3000/date_periods").subscribe((response:any)=>{
      this.date_periods = response;
      this.film_subtitles=response[0]['films'];
    })
  }
  date_periods:any[]=[];
  film_subtitles:any[]=[];
  date_period_hover_add(event:any){
    if(!event.target.classList.contains('date_period_active')){
      event.target.classList.add('date_period_hover');
    }
  }
  date_period_hover_remove(event:any){
    if(event.target.classList.contains('date_period_hover')){
      event.target.classList.remove('date_period_hover');
    }
  }
  change_date_period_active(event:any){
    if(!event.target.classList.contains('date_period_active')){
      let active_date_period_elements = document.getElementsByClassName('date_period_active');
      for(let i=0;i<active_date_period_elements.length;i++){
        active_date_period_elements[i].classList.remove('date_period_active');
      }
      event.target.classList.add('date_period_active');
    }
  }

  get_film_subtitles(event:any){
    for(let i=0;i<5;i++){
      if(event.target.id=='date_period_a_'+i.toString()){
        this.http.get("http://localhost:3000/date_periods").subscribe((response:any)=>{
          this.film_subtitles = response[i]['films']
        })
      }
    }
    }
}
