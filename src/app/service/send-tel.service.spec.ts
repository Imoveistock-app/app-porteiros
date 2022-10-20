import { TestBed } from '@angular/core/testing';

import { SendTelService } from './send-tel.service';

describe('SendTelService', () => {
  let service: SendTelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SendTelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
