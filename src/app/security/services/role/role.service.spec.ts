import { TestBed, inject } from '@angular/core/testing';

import { RoleService } from './role.service';
import { NbAuthModule } from '@nebular/auth';

describe('RoleService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        NbAuthModule.forRoot(),
      ],
      providers: [RoleService]
    });
  });

  it('should be created', inject([RoleService], (service: RoleService) => {
    expect(service).toBeTruthy();
  }));
});
