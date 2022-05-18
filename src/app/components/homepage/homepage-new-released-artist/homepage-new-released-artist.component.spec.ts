import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepageNewReleasedArtistComponent } from './homepage-new-released-artist.component';

describe('HomepageNewReleasedArtistComponent', () => {
  let component: HomepageNewReleasedArtistComponent;
  let fixture: ComponentFixture<HomepageNewReleasedArtistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomepageNewReleasedArtistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomepageNewReleasedArtistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
