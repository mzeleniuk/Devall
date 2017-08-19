import { TestBed, async } from '@angular/core/testing';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SearchUsersComponent } from './search-users/search-users.component';
import { SearchUsersService } from './search-users.service';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdInputModule, MdButtonModule, MdToolbarModule, MdIconModule, MdSnackBarModule } from '@angular/material';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        SearchUsersComponent
      ],
      imports: [
        BrowserAnimationsModule,
        HttpModule,
        MdInputModule,
        MdButtonModule,
        MdToolbarModule,
        MdIconModule,
        MdSnackBarModule
      ],
      providers: [SearchUsersService]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'Devall'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Devall');
  }));

  it('should render text in span tag with md-panel-header-text class', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('span.md-panel-header-text').textContent).toContain('Find developers in your city');
  }));
});
