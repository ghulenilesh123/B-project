import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgrxCompoComponent } from './ngrx-compo.component';

describe('NgrxCompoComponent', () => {
  let component: NgrxCompoComponent;
  let fixture: ComponentFixture<NgrxCompoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgrxCompoComponent]
    });
    fixture = TestBed.createComponent(NgrxCompoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
