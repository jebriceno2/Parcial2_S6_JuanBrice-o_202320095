/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AerolineasService } from './aerolineas.service';

describe('Service: Aerolineas', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AerolineasService]
    });
  });

  it('should ...', inject([AerolineasService], (service: AerolineasService) => {
    expect(service).toBeTruthy();
  }));
});
