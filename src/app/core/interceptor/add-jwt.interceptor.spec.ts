import { TestBed } from '@angular/core/testing';

import { AddJwtInterceptor } from './add-jwt.interceptor';

describe('AddJwtInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      AddJwtInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: AddJwtInterceptor = TestBed.inject(AddJwtInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
