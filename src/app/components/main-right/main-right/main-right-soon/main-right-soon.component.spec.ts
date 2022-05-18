import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainRightSoonComponent } from './main-right-soon.component';

describe('MainRightSoonComponent', () => {
  let component: MainRightSoonComponent;
  let fixture: ComponentFixture<MainRightSoonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainRightSoonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainRightSoonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
