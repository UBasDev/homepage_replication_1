import { Component, OnInit } from '@angular/core';
import { debounce, map, Observable } from 'rxjs';
import { NavService } from 'src/app/services/nav.service';

@Component({
  selector: 'app-mobile-nav',
  templateUrl: './mobile-nav.component.html',
  styleUrls: ['./mobile-nav.component.css'],
  providers:[NavService]
})
export class MobileNavComponent implements OnInit {

  constructor(private navService:NavService) { }

  ngOnInit(): void {
    this.mobile_nav_registration_data = this.navService.get_registrations()
    this.mobile_nav_registration_categories_data = this.navService.get_all_data()
    this.navService.get_all_data()
    .pipe(map((response:any)=>{
      for(let i=0;i<response.length;i++){
        this.mobile_nav_categories.push(response[i]['category'])
      }
    })).subscribe()
    this.navService.get_all_data().subscribe((response:any)=>{
      this.all_data = response;
    })
  }
  mobile_nav_registration_data!:Observable<any[]>;
  mobile_nav_registration_categories_data!:Observable<any[]>;
  all_data:any[]=[]
  mobile_nav_categories:any[]=[];
  nav_content_click_debounce_boolean:boolean=true;
  search_bar_content_toggler(){
    if(this.nav_content_click_debounce_boolean==true){
      this.nav_content_click_debounce_boolean = false;
      let elements = document.getElementsByClassName('mobile_navbar_display_content')
    for(let i=0;i<elements.length;i++){
      if(!elements[i].classList.contains('hidden') && elements[i].id!='mobile_nav_search_bar_container'){
        elements[i].classList.add('hidden')
        elements[i].classList.remove('mobile_navbar_display_content_close')
        if(!elements[i].classList.contains('mobile_navbar_display_content_open')){
          elements[i].classList.add('mobile_navbar_display_content_open')
        }
      }
    }
    let current_element = document.getElementById('mobile_nav_search_bar_container')
    if(current_element?.classList.contains('hidden')){
      current_element?.classList.remove('hidden');
      setTimeout(() => {
        current_element?.classList.remove('mobile_navbar_display_content_open')
      }, 800);
    }
    else{
      current_element?.classList.add('mobile_navbar_display_content_close')
      setTimeout(() => {
        current_element?.classList.add('hidden');
        current_element?.classList.remove('mobile_navbar_display_content_close')
        current_element?.classList.add('mobile_navbar_display_content_open')
      }, 800);
    }
    window.scrollTo({top: 0, behavior: 'smooth'})
    }
    setTimeout(() => {
      this.nav_content_click_debounce_boolean=true;
    }, 800);
  }

  register_content_toggler(){
    if(this.nav_content_click_debounce_boolean==true){
      this.nav_content_click_debounce_boolean=false;
      let elements = document.getElementsByClassName('mobile_navbar_display_content')
    for(let i=0;i<elements.length;i++){
      if(!elements[i].classList.contains('hidden') && elements[i].id!='mobile_nav_register_container'){
        elements[i].classList.add('hidden')
        elements[i].classList.remove('mobile_navbar_display_content_close')
        if(!elements[i].classList.contains('mobile_navbar_display_content_open')){
          elements[i].classList.add('mobile_navbar_display_content_open')
        }
      }
    }
    let current_element = document.getElementById('mobile_nav_register_container');
    if(current_element?.classList.contains('hidden')){
      current_element?.classList.remove('hidden');
      setTimeout(() => {
        current_element?.classList.remove('mobile_navbar_display_content_open')
      }, 800);
    }
    else{
      current_element?.classList.add('mobile_navbar_display_content_close')
      setTimeout(() => {
        current_element?.classList.add('hidden');
        current_element?.classList.remove('mobile_navbar_display_content_close')
        current_element?.classList.add('mobile_navbar_display_content_open')
      }, 800);
    }
    window.scrollTo({top: 0, behavior: 'smooth'})
    setTimeout(() => {
      this.nav_content_click_debounce_boolean=true;
    }, 800);
    }
  }

  category_content_toggler(){
    if(this.nav_content_click_debounce_boolean==true){
      this.nav_content_click_debounce_boolean=false;
      let elements = document.getElementsByClassName('mobile_navbar_display_content')
    for(let i=0;i<elements.length;i++){
      if(!elements[i].classList.contains('hidden') && elements[i].id!='mobile_nav_category_container'){
        elements[i].classList.add('hidden')
        elements[i].classList.remove('mobile_navbar_display_content_close')
        if(!elements[i].classList.contains('mobile_navbar_display_content_open')){
          elements[i].classList.add('mobile_navbar_display_content_open')
        }
      }
    }
    let current_element = document.getElementById('mobile_nav_category_container')
    if(current_element?.classList.contains('hidden')){
      current_element?.classList.remove('hidden');
      setTimeout(() => {
        current_element?.classList.remove('mobile_navbar_display_content_open')
      }, 800);
    }
    else{
      current_element?.classList.add('mobile_navbar_display_content_close')
      setTimeout(() => {
        current_element?.classList.add('hidden');
        current_element?.classList.remove('mobile_navbar_display_content_close')
        current_element?.classList.add('mobile_navbar_display_content_open')
      }, 800);
    }
    window.scrollTo({top: 0, behavior: 'smooth'})
    setTimeout(() => {
      this.nav_content_click_debounce_boolean=true;
    }, 800);
    }
  }
  sub_categories_toggler(event:any){
    for(let i=1;i<this.mobile_nav_categories.length;i++){
      if(event.target.firstChild.id=='nav_categories_b_' + i.toString()){
        document.getElementById('nav_sub_categories_' + this.all_data[i]['category'] + '_'+i.toString())?.classList.toggle('hidden')
      }
    }

  }

}
