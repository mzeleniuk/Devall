import { TestBed, inject } from '@angular/core/testing';
import { HttpModule } from '@angular/http';

import { SearchUsersService } from './search-users.service';

describe('SearchUsersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [SearchUsersService]
    });
  });

  it('should be created', inject([SearchUsersService], (service: SearchUsersService) => {
    expect(service).toBeTruthy();
  }));
});
