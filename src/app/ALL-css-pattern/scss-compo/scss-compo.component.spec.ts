import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScssCompoComponent } from './scss-compo.component';

describe('ScssCompoComponent', () => {
  let component: ScssCompoComponent;
  let fixture: ComponentFixture<ScssCompoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ScssCompoComponent]
    });
    fixture = TestBed.createComponent(ScssCompoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
