import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainRightSubtitleSenderComponent } from './main-right-subtitle-sender.component';

describe('MainRightSubtitleSenderComponent', () => {
  let component: MainRightSubtitleSenderComponent;
  let fixture: ComponentFixture<MainRightSubtitleSenderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainRightSubtitleSenderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainRightSubtitleSenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
