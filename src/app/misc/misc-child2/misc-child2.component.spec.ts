import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiscChild2Component } from './misc-child2.component';

describe('MiscChild2Component', () => {
  let component: MiscChild2Component;
  let fixture: ComponentFixture<MiscChild2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MiscChild2Component]
    });
    fixture = TestBed.createComponent(MiscChild2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
