import { Component, OnInit } from '@angular/core';
import { MainRightAnswerQuestionService } from 'src/app/services/main-right-answer-question.service';

@Component({
  selector: 'app-main-right-answer-question',
  templateUrl: './main-right-answer-question.component.html',
  styleUrls: ['./main-right-answer-question.component.css'],
  providers:[MainRightAnswerQuestionService]
})
export class MainRightAnswerQuestionComponent implements OnInit {

  constructor(private mainRightAnswerQuestionService:MainRightAnswerQuestionService) { }

  ngOnInit(): void {
    this.mainRightAnswerQuestionService.get_all_data().subscribe((response:any)=>{
      this.all_answer_question_data = response;
      this.input_answers = response[0]['answers']
    })
  }
  all_answer_question_data:any[]=[];
  input_answers:any[]=[]
}
