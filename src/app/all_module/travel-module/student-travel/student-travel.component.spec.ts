import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentTravelComponent } from './student-travel.component';

describe('StudentTravelComponent', () => {
  let component: StudentTravelComponent;
  let fixture: ComponentFixture<StudentTravelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudentTravelComponent]
    });
    fixture = TestBed.createComponent(StudentTravelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
