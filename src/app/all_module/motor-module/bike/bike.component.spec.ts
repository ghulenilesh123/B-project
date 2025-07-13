// import { ComponentFixture, TestBed } from '@angular/core/testing';
// import { BikeComponent } from './bike.component'; // adjust path as needed
// import { ActivatedRoute } from '@angular/router';
// import { of } from 'rxjs';

// describe('BikeComponent', () => {
//   let component: BikeComponent;
//   let fixture: ComponentFixture<BikeComponent>;

//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       declarations: [BikeComponent],
//       providers: [
//         {
//           provide: ActivatedRoute,
//           useValue: {
//             params: of({ id: '1' }),         // 👈 mock .params.subscribe
//             queryParams: of({}),             // optional
//             snapshot: {
//               paramMap: {
//                 get: (key: string) => '1'    // mock snapshot.paramMap.get('id')
//               }
//             }
//           }
//         }
//       ]
//     }).compileComponents();

//     fixture = TestBed.createComponent(BikeComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });
