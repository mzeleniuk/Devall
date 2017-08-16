import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchUsersComponent } from './search-users.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdInputModule, MdButtonModule } from '@angular/material';

describe('SearchUsersComponent', () => {
  let component: SearchUsersComponent;
  let fixture: ComponentFixture<SearchUsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchUsersComponent ],
      imports: [
        BrowserAnimationsModule,
        MdInputModule,
        MdButtonModule
      ]
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
