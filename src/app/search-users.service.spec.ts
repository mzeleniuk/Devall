import { TestBed, inject } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { SearchUsersService } from './search-users.service';

describe('SearchUsersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [SearchUsersService]
    });
  });

  it('should be created', inject([SearchUsersService], (service: SearchUsersService) => {
    expect(service).toBeTruthy();
  }));
});
