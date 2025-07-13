import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiscChildComponent } from './misc-child.component';

describe('MiscChildComponent', () => {
  let component: MiscChildComponent;
  let fixture: ComponentFixture<MiscChildComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MiscChildComponent]
    });
    fixture = TestBed.createComponent(MiscChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
