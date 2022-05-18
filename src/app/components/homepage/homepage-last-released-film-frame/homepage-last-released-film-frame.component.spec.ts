import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepageLastReleasedFilmFrameComponent } from './homepage-last-released-film-frame.component';

describe('HomepageLastReleasedFilmFrameComponent', () => {
  let component: HomepageLastReleasedFilmFrameComponent;
  let fixture: ComponentFixture<HomepageLastReleasedFilmFrameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomepageLastReleasedFilmFrameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomepageLastReleasedFilmFrameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
