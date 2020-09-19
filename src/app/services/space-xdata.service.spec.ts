import { TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import { SpaceXDataService } from './space-xdata.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('SpaceXDataService', () => {
  let service: SpaceXDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [HttpClient]
    });
    service = TestBed.inject(SpaceXDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
