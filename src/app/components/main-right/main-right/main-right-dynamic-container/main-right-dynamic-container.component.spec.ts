import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainRightDynamicContainerComponent } from './main-right-dynamic-container.component';

describe('MainRightDynamicContainerComponent', () => {
  let component: MainRightDynamicContainerComponent;
  let fixture: ComponentFixture<MainRightDynamicContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainRightDynamicContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainRightDynamicContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
