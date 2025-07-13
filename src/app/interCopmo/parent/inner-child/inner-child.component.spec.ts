import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InnerChildComponent } from './inner-child.component';

describe('InnerChildComponent', () => {
  let component: InnerChildComponent;
  let fixture: ComponentFixture<InnerChildComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InnerChildComponent]
    });
    fixture = TestBed.createComponent(InnerChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
