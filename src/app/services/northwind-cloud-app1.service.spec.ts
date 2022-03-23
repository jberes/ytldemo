import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { NorthwindCloudApp1Service } from './northwind-cloud-app1.service';

describe('NorthwindCloudApp1Service', () => {
  let service: NorthwindCloudApp1Service;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(NorthwindCloudApp1Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
