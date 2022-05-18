import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HomepageNewReleasedArtistService } from 'src/app/services/homepage-new-released-artist.service';

@Component({
  selector: 'app-homepage-new-released-artist',
  templateUrl: './homepage-new-released-artist.component.html',
  styleUrls: ['./homepage-new-released-artist.component.css'],
  providers:[HomepageNewReleasedArtistService]
})
export class HomepageNewReleasedArtistComponent implements OnInit {


  constructor(private homepageLastReleasedFilmFrameService:HomepageNewReleasedArtistService) { }

  ngOnInit(): void {
    this.homepage_new_released_artist_header = this.homepageLastReleasedFilmFrameService.get_header()
    this.homepage_new_released_artist_all_data = this.homepageLastReleasedFilmFrameService.get_all_data()
  }
  homepage_new_released_artist_header!:Observable<any[]>;
  homepage_new_released_artist_all_data!:Observable<any[]>;
}
