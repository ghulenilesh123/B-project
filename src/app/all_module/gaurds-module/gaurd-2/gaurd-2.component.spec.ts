import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Gaurd2Component } from './gaurd-2.component';

describe('Gaurd2Component', () => {
  let component: Gaurd2Component;
  let fixture: ComponentFixture<Gaurd2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Gaurd2Component]
    });
    fixture = TestBed.createComponent(Gaurd2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
