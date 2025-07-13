import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Gaurd1Component } from './gaurd-1.component';

describe('Gaurd1Component', () => {
  let component: Gaurd1Component;
  let fixture: ComponentFixture<Gaurd1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Gaurd1Component]
    });
    fixture = TestBed.createComponent(Gaurd1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
