import { Component, OnInit } from '@angular/core';
import { SurveyService } from 'src/app/services/survey.service';

@Component({
  selector: 'app-main-right-survey',
  templateUrl: './main-right-survey.component.html',
  styleUrls: ['./main-right-survey.component.css'],
  providers:[SurveyService]
})
export class MainRightSurveyComponent implements OnInit {

  constructor(private surveyService:SurveyService) { }

  ngOnInit(): void {
    this.surveyService.get_all_data().subscribe((response:any)=>{
      this.all_survey_data = response;
    })
  }
  all_survey_data:any[]=[];
}
