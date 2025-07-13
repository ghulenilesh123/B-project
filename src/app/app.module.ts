import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MotorInsuranceComponent } from './Routing/motor-insurance/motor-insurance.component'; 
import { HealthComponent } from './health/health.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { CarDatailsComponent } from './Routing/car-datails/car-datails.component'; 
import { ParentComponent } from './interCopmo/parent/parent.component';
import { ChildComponent } from './interCopmo/parent/child/child.component';
import { InnerChildComponent } from './interCopmo/parent/inner-child/inner-child.component';
import { Parent2Component } from './interCopmo/parent/parent2/parent2.component';
import { CompoAComponent } from './interCopmo/compo-a/compo-a.component';
import { CompoBComponent } from './interCopmo/compo-b/compo-b.component';
import { Practice1Component } from './practice_compo/practice1/practice1.component'; 
import { Practice2Component } from './practice_compo/practice2/practice2.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LocalStorageComponent } from './Storege/local-storage/local-storage.component';
import { SessionStorageComponent } from './Storege/session-storage/session-storage.component';
import { InterceptorComponent } from './interceptor/interceptor.component';
import { HttpClientModule } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
// import { AuthInterceptor } from './all_service/service/auth.interceptor'; 
import { SubjectComponent } from './subject/subject.component';
import { SmeComponent } from './guards_compo/sme/sme.component'; 
import { MarineComponent } from './guards_compo/marine/marine.component';
import { FireComponent } from './guards_compo/fire/fire.component'; 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialComponent } from './Library/angular-material/angular-material.component'; 
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { PrimeNGComponent } from './Library/prime-ng/prime-ng.component'; 
import { ButtonModule } from 'primeng/button';
import { NgChartsModule } from 'ng2-charts';
import { ChartJsComponent } from './Library/chart-js/chart-js.component'; 
import { CookieService } from 'ngx-cookie-service';
import { MiscChildComponent } from './misc/misc-child/misc-child.component';
import { MiscParentComponent } from './misc/misc-parent/misc-parent.component';
import { AuthInterceptor } from './all_service/service/auth.interceptor';
import { MiscChild2Component } from './misc/misc-child2/misc-child2.component';
import { TestComponent } from './practice_compo/test/test.component';
import { DemoComponent } from './demo/demo.component';
@NgModule({
  declarations: [
    AppComponent,
    MotorInsuranceComponent,
    HealthComponent,
    HomeComponent,
    CarDatailsComponent,
    ParentComponent,
    ChildComponent,
    InnerChildComponent,
    Parent2Component,
    CompoAComponent,
    CompoBComponent,
    Practice1Component,
    Practice2Component,
    LocalStorageComponent,
    SessionStorageComponent,
    InterceptorComponent,
    SubjectComponent,
    SmeComponent,
    MarineComponent,
    FireComponent,
    AngularMaterialComponent,
    PrimeNGComponent,
    ChartJsComponent,
    MiscChildComponent,
    MiscParentComponent,
    MiscChild2Component,
    TestComponent,
    DemoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    //empliment angular material
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    ButtonModule,
    NgChartsModule

  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass:AuthInterceptor,
      multi: true,
      
    },
    
  ],
  bootstrap: [AppComponent],//CookieService
})
export class AppModule { }
