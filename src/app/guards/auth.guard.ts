import { CanActivateChildFn, CanActivateFn, CanDeactivateFn, CanLoadFn, CanMatchFn, Resolve, ResolveFn} from '@angular/router';
import { LoginServiceService } from '../all_service/service/login-service.service'; 
import { inject } from '@angular/core';
import { Observable } from 'rxjs';
import { CompoServiceService } from '../all_service/service/compo-service.service'; 

// 1 CanActivate
export const authGuard: CanActivateFn = (route, state) => {
  const loginservice = inject(LoginServiceService)
  return loginservice.isLoggedIn() ;
};
// 2 CanActivateChild
export const authChildGuard:CanActivateChildFn = (route, state) => {
  const loginservice = inject(LoginServiceService)
  return loginservice.isLoggedIn() ;
};
 // 3 CanLoad 

export const authloadGuards : CanLoadFn = ( route ,state)=>{
const loginservice = inject(LoginServiceService)
  return loginservice.isLoggedIn() ;
}

// 4 CanMatch 
// export const authMatchGuards : CanMatchFn = ( route ,state)=>{
// const loginservice = inject(LoginServiceService)
//   return loginservice.userhasRole('studen') // will return true or false 
// }

// 5 canDeactivate
export const authCanDeactivateGuard : CanDeactivateFn<CanComponentDeactivate> = (component) =>{
 return component.canDeactivate ? component.canDeactivate() : true;
}

// interface to implement canDeactivate guard 
export interface CanComponentDeactivate{
  canDeactivate:()=> boolean | Observable<boolean> //return in between tow type
}
// simple interface : It is an implemeted version of the class
// in interface only method name and return type will be there.
// also consist of properties.
// there will be no data or implementation 
  

// 6 Resolve
export const authResolver : ResolveFn<any> = (route, state) =>{
  const dataService = inject(CompoServiceService);
  console.log(dataService.getDataBeforeCompNavigation());
  return dataService.getDataBeforeCompNavigation(); 
  // will return the data before navigating to respective component
}


