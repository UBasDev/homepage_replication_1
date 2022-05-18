import { Component, OnInit } from '@angular/core';
import { MainRightDetailService } from 'src/app/services/main-right-detail.service';

@Component({
  selector: 'app-main-right-details',
  templateUrl: './main-right-details.component.html',
  styleUrls: ['./main-right-details.component.css'],
  providers:[MainRightDetailService]
})
export class MainRightDetailsComponent implements OnInit {

  constructor(private mainRightDetailService:MainRightDetailService) { }

  ngOnInit(): void {
    this.mainRightDetailService.get_all_data().subscribe((response:any)=>{
      this.all_details = response;
    })
  }
  all_details:any[]=[];
}
