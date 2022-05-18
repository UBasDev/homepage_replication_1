import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainRightSerialSubtitleComponent } from './main-right-serial-subtitle.component';

describe('MainRightSerialSubtitleComponent', () => {
  let component: MainRightSerialSubtitleComponent;
  let fixture: ComponentFixture<MainRightSerialSubtitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainRightSerialSubtitleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainRightSerialSubtitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
