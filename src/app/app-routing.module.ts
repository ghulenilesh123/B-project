import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MotorInsuranceComponent } from './Routing/motor-insurance/motor-insurance.component';
import { CorporateComponent } from './guards_compo/corporate/corporate.component';
import { HealthComponent } from './health/health.component';
import { CarDatailsComponent } from './Routing/car-datails/car-datails.component';
import { ParentComponent } from './interCopmo/parent/parent.component';
import { Parent2Component } from './interCopmo/parent/parent2/parent2.component';
import { CompoAComponent } from './interCopmo/compo-a/compo-a.component';
import { CompoBComponent } from './interCopmo/compo-b/compo-b.component';
import { Practice2Component } from './practice_compo/practice2/practice2.component'; 
import { Practice1Component } from './practice_compo/practice-1/practice-1.component';
import { LocalStorageComponent } from './Storege/local-storage/local-storage.component';
import { SessionStorageComponent } from './Storege/session-storage/session-storage.component';
import { InterceptorComponent } from './interceptor/interceptor.component';
import { SubjectComponent } from './subject/subject.component';
import { SmeComponent } from './guards_compo/sme/sme.component';
import { MarineComponent } from './guards_compo/marine/marine.component'; 
import { FireComponent } from './guards_compo/fire/fire.component';
import { AngularMaterialComponent } from './Library/angular-material/angular-material.component';
import { PrimeNGComponent } from './Library/prime-ng/prime-ng.component';
import { ChartJsComponent } from './Library/chart-js/chart-js.component'; 
import { authResolver ,authCanDeactivateGuard, authChildGuard, authGuard, authloadGuards} from './guards/auth.guard';
import { MiscParentComponent } from './misc/misc-parent/misc-parent.component';
import { MiscChildComponent } from './misc/misc-child/misc-child.component';
import { FLoginComponent } from './first-login/f-login/f-login.component';
import { LoginAComponent } from './login-a/login-a.component';

const rot: Routes = [
  {path:"login",component:LoginAComponent},
  {path:"",component:FLoginComponent},
  { path: "home", component: HomeComponent },
  { path: "motor", component: MotorInsuranceComponent },
  // {path:"crpr",component:CorporateComponent},
  { path: "health", component: HealthComponent },
  { path: "parent", component: ParentComponent },
  { path: "parent2", component: Parent2Component },
  { path: "Compo-A", component: CompoAComponent },
  { path: "Compo-B", component: CompoBComponent },
  { path: "practice2", component: Practice2Component },
  { path: "practice1", component: Practice1Component },
  { path: "local_s", component: LocalStorageComponent },
  { path: "session_s", component: SessionStorageComponent },
  { path: "intercepter", component: InterceptorComponent },
  { path: "subject", component: SubjectComponent },
  { path: "Material", component: AngularMaterialComponent },
  { path: "prime_ng", component: PrimeNGComponent },
  { path: "chart", component: ChartJsComponent },
  { path: "misc_parent", component: MiscParentComponent },
  { path: "misc_child", component: MiscChildComponent },

  { path: "car/:input", component: CarDatailsComponent },

  //guard
  { path: "crpr", component: CorporateComponent, canActivate: [authGuard], resolve: [authResolver] },
  {
    path: "sme", canActivateChild: [authChildGuard],
    children: [
      { path: "", component: SmeComponent },
      { path: "marine", component: MarineComponent, canDeactivate: [authCanDeactivateGuard] },
      { path: "fire", component: FireComponent, resolve: [authResolver] },
      { path: "subject", component: SubjectComponent, canDeactivate: [authCanDeactivateGuard] },

    ]
  },

  // lazy loding
  {
    path: 'motor_M',
    loadChildren: () => import('./all_module/motor-module/motor-module.module')
      .then(mod => mod.MotorModuleModule),
      
  },

  {
    path: "travel_M",
    loadChildren: () => import('./all_module/travel-module/travel-module.module')
      .then(mod => mod.TravelModuleModule),
    canLoad: [authloadGuards]
  },


   {
    path : "gaurds_m",
    loadChildren:()=> import('./all_module/gaurds-module/gaurds-module.module')
    .then(module=>module.GaurdsModuleModule)
   },

  { path: "**", redirectTo: "" }, // wild card 

];

@NgModule({
  imports: [RouterModule.forRoot(rot)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
