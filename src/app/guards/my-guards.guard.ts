import { CanActivateChildFn, CanActivateFn, CanDeactivateFn, CanLoadFn, CanMatchFn, ResolveFn } from '@angular/router';
import { GaurdsServiceService } from '../all_service/service2/gaurds-service.service';
import { inject } from '@angular/core';
import { Observable, tap } from 'rxjs';

export const myGuardsGuard: CanActivateFn = (route, state) => {
  return false;
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

export const myloadGuards : CanLoadFn = ( route ,state)=>{
const loginservice = inject(GaurdsServiceService)
  return loginservice.islogin() ;
}

// export const myresolver: ResolveFn<any>= (route, state) => {
//   const loginservice = inject(GaurdsServiceService)
//   console.log(loginservice.get())
//   return loginservice.get()
// };

export const myresolver: ResolveFn<any> = (route, state) => {
  const loginservice = inject(GaurdsServiceService);
  return loginservice.get().pipe(
    tap(data => console.log("Resolver got data:", data)) //log actual result
  );
};
// First, you should see console.log(loginservice.get()) (from resolver).
// Then you should see "Resolver data in component:" ... (from component).
//Shows that after the resolver finished, your component’s logic executed normally.
// unles resolver not finished to render its content ,component cant render its own content


export const mydeactive:CanDeactivateFn<myinterface> = (component) => {
  
  return component.CanDeactivate ? component.CanDeactivate() : true

};

export interface myinterface{
CanDeactivate :()=> boolean | Observable <boolean>
}


