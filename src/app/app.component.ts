import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'angular1';
  scroll_up_boolean:boolean=false;
  @HostListener('window:scroll',['$event']) onscroll(){
    if(window.scrollY>200){
      this.scroll_up_boolean = true;
    }
    else{
      this.scroll_up_boolean = false;
    }
  }
  scrollToTop(){
    window.scrollTo({top: 0, behavior: 'smooth'})
  }
}
