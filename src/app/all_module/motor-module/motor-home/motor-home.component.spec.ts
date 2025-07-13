import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MotorHomeComponent } from './motor-home.component';

describe('MotorHomeComponent', () => {
  let component: MotorHomeComponent;
  let fixture: ComponentFixture<MotorHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MotorHomeComponent]
    });
    fixture = TestBed.createComponent(MotorHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
