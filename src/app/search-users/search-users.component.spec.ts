import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchUsersComponent } from './search-users.component';
import { SearchUsersService } from '../search-users.service';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MdInputModule, MdButtonModule, MdSnackBarModule, MdDialogModule, MdPaginatorModule } from '@angular/material';
import { MdSnackBar, MdDialog } from '@angular/material';

describe('SearchUsersComponent', () => {
  let component: SearchUsersComponent;
  let fixture: ComponentFixture<SearchUsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SearchUsersComponent],
      imports: [
        BrowserAnimationsModule,
        HttpClientModule,
        MdInputModule,
        MdButtonModule,
        MdSnackBarModule,
        MdDialogModule,
        MdPaginatorModule
      ],
      providers: [SearchUsersService, MdSnackBar, MdDialog]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
