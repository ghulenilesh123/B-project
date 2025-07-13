import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { CompoBComponent } from './compo-b.component';

describe('CompoBComponent', () => {
  let component: CompoBComponent;
  let fixture: ComponentFixture<CompoBComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CompoBComponent],
      imports: [HttpClientTestingModule]

    });
    fixture = TestBed.createComponent(CompoBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
