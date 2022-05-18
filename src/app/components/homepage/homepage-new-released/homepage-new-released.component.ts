import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import {
  map,
  Observable,
} from 'rxjs';
import { HomepageNewReleasedService } from 'src/app/services/homepage-new-released.service';

@Component({
  selector: 'app-homepage-new-released',
  templateUrl: './homepage-new-released.component.html',
  styleUrls: ['./homepage-new-released.component.css'],
  providers: [HomepageNewReleasedService],
})
export class HomepageNewReleasedComponent implements OnInit {
  constructor(
    private http: HttpClient,
    private homepageNewReleasedService: HomepageNewReleasedService
  ) {}

  ngOnInit(): void {
    this.homepageNewReleasedService.get_new_released_header().subscribe({
      next: (response: any) => {
        this.homepage_new_release_header = response[0]['header'];
      },
    });
    this.all_subscribed_data = this.homepageNewReleasedService.get_all_data();
    this.all_subscribed_data
    .subscribe((response:any)=>{
      this.current_showing_data = response[0]['contents']
    })
    this.all_subscribed_data.pipe(
      map((response:any[])=>{
        for(let i=0;i<response.length;i++){
          this.homepage_new_release_section_names.push(response[i]['section_name'])
        }
      })
    ).subscribe()
    this.imdb_point_check()
  }
  spinner_boolean: boolean = false;
  homepage_new_release_header: string = '';
  all_subscribed_data!: Observable<any[]>;
  current_showing_data: any[]=[];
  homepage_new_release_section_names:any[] = this.current_showing_data

  date_period_hover_add(event: any) {
    if (!event.target.classList.contains('date_period_active3')) {
      event.target.classList.add('date_period_hover3');
    }
  }
  date_period_hover_remove(event: any) {
    if (event.target.classList.contains('date_period_hover3')) {
      event.target.classList.remove('date_period_hover3');
    }
  }
  change_new_released_section_active(event: any) {
    if (!event.target.classList.contains('date_period_active3')) {
      let active_date_period_elements = document.getElementsByClassName(
        'date_period_active3'
      );
      for (let i = 0; i < active_date_period_elements.length; i++) {
        active_date_period_elements[i].classList.remove('date_period_active3');
      }
      event.target.classList.add('date_period_active3');
    }
  }

  change_new_released_section_change(event: any) {
    for(let i=0;i<this.homepage_new_release_section_names.length;i++){
      if(event.target.id=='new_released_section_button_'+i.toString()){
        this.homepageNewReleasedService.get_all_data().subscribe({
          next:(response:any)=>{
            this.spinner_boolean=true;
            this.current_showing_data = response[i]['contents'];
          },
          complete:()=>{
            setTimeout(() => {
              this.spinner_boolean=false;
            }, 100);
          }
        })
        break;
      }
    }
  }

  imdb_point_check(): any {
    let imdb_point_elements = document.getElementsByClassName('imdb_point1');
    if (imdb_point_elements.length == 0) {
      setTimeout(() => {
        this.imdb_point_check();
      }, 500);
    }
    for (let i = 0; i < imdb_point_elements.length; i++) {
      if (parseInt(imdb_point_elements[i].textContent!) >= 8) {
        imdb_point_elements[i].classList.add('text-green-500');
      } else if (
        parseInt(imdb_point_elements[i].textContent!) > 3 &&
        parseInt(imdb_point_elements[i].textContent!) < 8
      ) {
        imdb_point_elements[i].classList.add('text-orange-500');
      } else if (parseInt(imdb_point_elements[i].textContent!) <= 3) {
        imdb_point_elements[i].classList.add('text-red-700');
      }
    }
  }

  content_name_underline_add(event:any){
    for(let i=0;i<event.target.children.length;i++){
      if(event.target.children[i].tagName=='H1' && !event.target.children[i].classList.contains('underline')){
        event.target.children[i].classList.add('underline');
        break;
      }
    }
  }

  content_name_underline_remove(event:any){
    for(let i=0;i<event.target.children.length;i++){
      if(event.target.children[i].tagName=='H1' && event.target.children[i].classList.contains('underline')){
        event.target.children[i].classList.remove('underline');
        break;
      }
    }
  }

}
