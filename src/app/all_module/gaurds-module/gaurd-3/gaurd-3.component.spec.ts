import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Gaurd3Component } from './gaurd-3.component';

describe('Gaurd3Component', () => {
  let component: Gaurd3Component;
  let fixture: ComponentFixture<Gaurd3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Gaurd3Component]
    });
    fixture = TestBed.createComponent(Gaurd3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
