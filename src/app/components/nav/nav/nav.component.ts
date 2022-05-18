import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit, AfterViewInit {

  constructor(private http:HttpClient) { }

  ngOnInit(): void {

    this.http.get("http://localhost:3000/nav_categories").subscribe((response:any)=>{
      this.nav_categories = response;
      this.sub_categories = response[0]["sub_categories"];
    });
    this.http.get("http://localhost:3000/nav_registrations").subscribe((response:any)=>{
      this.nav_registrations = response;
    })
  }
  ngAfterViewInit(): void {
  }

  nav_categories:any[]=[];
  nav_registrations:any[]=[];
  sub_categories:any[]=[];

  show_sub_categories(event:any){
    for(let i=0;i<9;i++){
      if(event.target.id=='nav_categories_'+i.toString()){
        this.http.get("http://localhost:3000/nav_categories").subscribe((response:any)=>{
          if(response[i]["sub_categories"].length>0){
            this.sub_categories = response[i]["sub_categories"];
            if(i==1){
              this.sub_categories.unshift({})
            }
            else if(i==2){
              this.sub_categories.unshift({},{})
            }
            else if(i==3){
              this.sub_categories.unshift({},{},{})
            }
            else if(i==4){
              this.sub_categories.unshift({},{},{},{})
            }
            else if(i==5){
              this.sub_categories.unshift({},{},{},{},{})
            }
            else if(i==6){
              this.sub_categories.unshift({},{},{},{},{},{})
            }
          }
        })
      }
    }
  }

  login_form_toggler(event:any){
    let form_container = document.getElementById('login_form_container')
    if(event?.target.id=='registration_1'){
      if(form_container?.classList.contains('hidden')){
        form_container?.classList.remove('hidden')
      }
      else{
        form_container?.classList.add('hidden')
      }
    }
  }

}
