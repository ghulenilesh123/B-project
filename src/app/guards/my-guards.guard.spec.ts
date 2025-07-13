import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { myGuardsGuard } from './my-guards.guard';

describe('myGuardsGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => myGuardsGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
