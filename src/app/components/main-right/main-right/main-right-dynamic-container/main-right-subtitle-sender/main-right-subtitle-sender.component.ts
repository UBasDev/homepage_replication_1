import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-right-subtitle-sender',
  templateUrl: './main-right-subtitle-sender.component.html',
  styleUrls: ['./main-right-subtitle-sender.component.css']
})
export class MainRightSubtitleSenderComponent implements OnInit {

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.http.get("http://localhost:8000/main_right_subtitle_senders").subscribe((response:any)=>{
      this.date_periods = response;
      this.film_subtitles=response[0]['people'];
    })
  }
  date_periods:any[]=[];
  film_subtitles:any[]=[];
  date_period_hover_add(event:any){
    if(!event.target.classList.contains('date_period_active2')){
      event.target.classList.add('date_period_hover2');
    }
  }
  date_period_hover_remove(event:any){
    if(event.target.classList.contains('date_period_hover2')){
      event.target.classList.remove('date_period_hover2');
    }
  }
  change_date_period_active(event:any){
    if(!event.target.classList.contains('date_period_active2')){
      let active_date_period_elements = document.getElementsByClassName('date_period_active2');
      for(let i=0;i<active_date_period_elements.length;i++){
        active_date_period_elements[i].classList.remove('date_period_active2');
      }
      event.target.classList.add('date_period_active2');
    }
  }

  get_film_subtitles(event:any){
    for(let i=0;i<4;i++){
      if(event.target.id=='date_period_c_'+i.toString()){
        this.http.get("http://localhost:8000/main_right_subtitle_senders").subscribe((response:any)=>{
          this.film_subtitles = response[i]['people']
        })
      }
    }
    }

}
