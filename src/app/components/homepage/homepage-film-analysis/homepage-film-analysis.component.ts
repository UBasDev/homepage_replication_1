import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { HomepageFilmAnalysisService } from 'src/app/services/homepage-film-analysis.service';

@Component({
  selector: 'app-homepage-film-analysis',
  templateUrl: './homepage-film-analysis.component.html',
  styleUrls: ['./homepage-film-analysis.component.css'],
  providers:[HomepageFilmAnalysisService]
})
export class HomepageFilmAnalysisComponent implements OnInit {

  constructor(private homepageFilmAnalysisService:HomepageFilmAnalysisService) { }

  ngOnInit(): void {
    this.homepage_film_analysis_header = this.homepageFilmAnalysisService.get_header()
    this.homepage_film_analysis_all_data = this.homepageFilmAnalysisService.get_all_data()

  }

  homepage_film_analysis_header!:Observable<any[]>;
  homepage_film_analysis_all_data!:Observable<any[]>;

  element_new_text:string|undefined = ""

  @ViewChild('film_comment') film_comment!:ElementRef;

  limitation(){
    this.film_comment.nativeElement.inenrText = this.film_comment.nativeElement.innerText.slice(0,5)
    console.log(this.film_comment.nativeElement.innerText)
  }

}
