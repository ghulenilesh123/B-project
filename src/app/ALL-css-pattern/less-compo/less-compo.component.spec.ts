import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LessCompoComponent } from './less-compo.component';

describe('LessCompoComponent', () => {
  let component: LessCompoComponent;
  let fixture: ComponentFixture<LessCompoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LessCompoComponent]
    });
    fixture = TestBed.createComponent(LessCompoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
