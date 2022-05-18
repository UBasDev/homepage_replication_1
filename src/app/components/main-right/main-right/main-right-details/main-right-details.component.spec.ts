import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainRightDetailsComponent } from './main-right-details.component';

describe('MainRightDetailsComponent', () => {
  let component: MainRightDetailsComponent;
  let fixture: ComponentFixture<MainRightDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainRightDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainRightDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
