import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SassCompoComponent } from './sass-compo.component';

describe('SassCompoComponent', () => {
  let component: SassCompoComponent;
  let fixture: ComponentFixture<SassCompoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SassCompoComponent]
    });
    fixture = TestBed.createComponent(SassCompoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
