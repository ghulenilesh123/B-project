// import { ComponentFixture, TestBed } from '@angular/core/testing';
// import { CarDatailsComponent } from './car-datails.component';
// import { ActivatedRoute } from '@angular/router';
// import { of } from 'rxjs';

// describe('CarDatailsComponent', () => {
//   let component: CarDatailsComponent;
//   let fixture: ComponentFixture<CarDatailsComponent>;

//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       declarations: [CarDatailsComponent],
//       providers: [
//         {
//           provide: ActivatedRoute,
//           useValue: {
//             params: of({ id: '1' }), // for route.params.subscribe
//             queryParams: of({}),
//             snapshot: {
//               paramMap: {
//                 get: (key: string) => {
//                   if (key === 'input') return 'mockedInputValue';
//                   return 'defaultValue';
//                 }
//               }
//             }
//           }
//         }
//       ]
//     }).compileComponents();

//     fixture = TestBed.createComponent(CarDatailsComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });
