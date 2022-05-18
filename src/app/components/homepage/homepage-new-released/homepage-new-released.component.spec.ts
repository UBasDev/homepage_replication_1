import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepageNewReleasedComponent } from './homepage-new-released.component';

describe('HomepageNewReleasedComponent', () => {
  let component: HomepageNewReleasedComponent;
  let fixture: ComponentFixture<HomepageNewReleasedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomepageNewReleasedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomepageNewReleasedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
