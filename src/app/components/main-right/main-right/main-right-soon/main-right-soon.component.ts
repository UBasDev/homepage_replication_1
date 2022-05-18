import { Component, OnInit } from '@angular/core';
import { SoonService } from 'src/app/services/soon.service';

@Component({
  selector: 'app-main-right-soon',
  templateUrl: './main-right-soon.component.html',
  styleUrls: ['./main-right-soon.component.css'],
  providers:[SoonService]
})
export class MainRightSoonComponent implements OnInit {

  constructor(private soonService:SoonService) { }

  ngOnInit(): void {
    this.soonService.get_all_data().subscribe((response:any)=>{
      this.all_soon_data=response;
    })
  }
  all_soon_data:any[]=[];
}
