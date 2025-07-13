import { CanActivateChildFn, CanActivateFn, CanDeactivateFn, CanMatchFn, ResolveFn } from '@angular/router';
import { GaurdsServiceService } from '../all_service/service2/gaurds-service.service';
import { inject } from '@angular/core';
import { Observable } from 'rxjs';

export const myGuardsGuard: CanActivateFn = (route, state) => {
  return true;
};

export const myactivete: CanActivateFn = (route, state) => {
  const loginservice = inject(GaurdsServiceService)
  return loginservice.islogin()
};

export const mychildactivete: CanActivateChildFn = (route, state) => {
  const loginservice = inject(GaurdsServiceService)
  return loginservice.islogin()
};

export const mymatch: CanMatchFn = (route, state) => {
  const loginservice = inject(GaurdsServiceService)
  return loginservice.isuser("student")
};

export const myresolver: ResolveFn<any>= (route, state) => {
  const loginservice = inject(GaurdsServiceService)
  console.log(loginservice.get())
  return loginservice.get()
};



export const mydeactive:CanDeactivateFn<myinterface> = (component) => {
  
  return component.CanDeactivate ? component.CanDeactivate() : true

};

export interface myinterface{
CanDeactivate :()=> boolean | Observable <boolean>
}


