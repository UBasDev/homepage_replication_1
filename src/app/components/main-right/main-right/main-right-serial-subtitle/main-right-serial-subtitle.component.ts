import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { SerialSubtitleService } from 'src/app/services/serial-subtitle.service';

@Component({
  selector: 'app-main-right-serial-subtitle',
  templateUrl: './main-right-serial-subtitle.component.html',
  styleUrls: ['./main-right-serial-subtitle.component.css'],
  providers:[SerialSubtitleService]
})
export class MainRightSerialSubtitleComponent implements OnInit {

  constructor(private http:HttpClient, private serialSubtitleService:SerialSubtitleService) { }

  ngOnInit(): void {
    this.serialSubtitleService.get_all_data().subscribe((response:any)=>{
      this.date_periods = response;
      this.film_subtitles = response[0]['films'];
    });
  }
  date_periods:any[]=[];
  film_subtitles:any[]=[];
  date_period_hover_add(event:any){
    if(!event.target.classList.contains('date_period_active1')){
      event.target.classList.add('date_period_hover1');
    }
  }
  date_period_hover_remove(event:any){
    if(event.target.classList.contains('date_period_hover1')){
      event.target.classList.remove('date_period_hover1');
    }
  }
  change_date_period_active(event:any){
    if(!event.target.classList.contains('date_period_active1')){
      let active_date_period_elements = document.getElementsByClassName('date_period_active1');
      for(let i=0;i<active_date_period_elements.length;i++){
        active_date_period_elements[i].classList.remove('date_period_active1');
      }
      event.target.classList.add('date_period_active1');
    }
  }

  get_film_subtitles(event:any){
    for(let i=0;i<5;i++){
      if(event.target.id=='date_period_b_'+i.toString()){
        this.serialSubtitleService.get_all_data().subscribe((response:any)=>{
          this.film_subtitles = response[i]['films']
        })
      }
    }
    }

}
