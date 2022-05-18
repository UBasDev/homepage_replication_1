import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HomepageLastReleasedFilmFrameServiceService } from 'src/app/services/homepage-last-released-film-frame-service.service';

@Component({
  selector: 'app-homepage-last-released-film-frame',
  templateUrl: './homepage-last-released-film-frame.component.html',
  styleUrls: ['./homepage-last-released-film-frame.component.css'],
  providers:[HomepageLastReleasedFilmFrameServiceService]
})
export class HomepageLastReleasedFilmFrameComponent implements OnInit {

  constructor(private homepageLastReleasedFilmFrameService:HomepageLastReleasedFilmFrameServiceService) { }

  ngOnInit(): void {
    this.homepage_last_released_film_frame_header = this.homepageLastReleasedFilmFrameService.get_header()
    this.homepage_last_released_film_frame_all_data = this.homepageLastReleasedFilmFrameService.get_all_data()
  }
  homepage_last_released_film_frame_header!:Observable<any[]>;
  homepage_last_released_film_frame_all_data!:Observable<any[]>;
}
