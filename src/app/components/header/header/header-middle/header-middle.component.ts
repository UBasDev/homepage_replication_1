import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-header-middle',
  templateUrl: './header-middle.component.html',
  styleUrls: ['./header-middle.component.css']
})
export class HeaderMiddleComponent implements OnInit {

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.http.get('http://localhost:8000/search_details').subscribe((response:any)=>{
      this.users = response;
      this.formValue = response[0].placeholder;
    })
  }
  users:any[] = [];
  formValue:string = ""

  selectChange(event:any){
    for(let i=0;i<this.users.length;i++){
      if(event.target.value == this.users[i].category){
        this.formValue = this.users[i].placeholder;
      }
    }
  }
}
