import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepageFilmAnalysisComponent } from './homepage-film-analysis.component';

describe('HomepageFilmAnalysisComponent', () => {
  let component: HomepageFilmAnalysisComponent;
  let fixture: ComponentFixture<HomepageFilmAnalysisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomepageFilmAnalysisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomepageFilmAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
