import { TestBed } from '@angular/core/testing';

import { DomainCardService } from './domain-card.service';

describe('DomainCardService', () => {
  let service: DomainCardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DomainCardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
