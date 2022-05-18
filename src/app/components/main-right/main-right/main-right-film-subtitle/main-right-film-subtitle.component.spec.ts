import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainRightFilmSubtitleComponent } from './main-right-film-subtitle.component';

describe('MainRightFilmSubtitleComponent', () => {
  let component: MainRightFilmSubtitleComponent;
  let fixture: ComponentFixture<MainRightFilmSubtitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainRightFilmSubtitleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainRightFilmSubtitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
