import { TestBed } from '@angular/core/testing';

import { UserserviceService } from './userservice.service';
import { waitForAsync } from '@angular/core/testing';

describe('UserserviceService', () => {
  let service: UserserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserserviceService],
    }).compileComponents();
    service = TestBed.inject(UserserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('test that getValue function returns real value', () => {
    
    service.getValue();
    expect(service.getValue()).toEqual('real value');
  });
});
