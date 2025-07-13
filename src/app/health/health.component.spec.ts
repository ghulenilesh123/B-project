import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HealthComponent } from './health.component';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { ChildComponent } from '../interCopmo/parent/child/child.component'; 

describe('HealthComponent', () => {
  let component: HealthComponent;
  let fixture: ComponentFixture<HealthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HealthComponent, ChildComponent ],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            data: of([[null, 'mocked resolver value']])
          }
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(HealthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
