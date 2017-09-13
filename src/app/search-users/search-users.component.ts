import { Component, OnInit } from '@angular/core';
import { SearchUsersService } from '../search-users.service';
import { UserInfoComponent } from '../user-info/user-info.component';
import { MdSnackBar, MdDialog, PageEvent } from '@angular/material';

@Component({
  selector: 'app-search-users',
  templateUrl: './search-users.component.html',
  styleUrls: ['./search-users.component.css']
})

export class SearchUsersComponent implements OnInit {
  location: string;
  language: string;
  page: number;
  per_page: number;

  results: any[] = [];
  error_text: string;

  length = 0;
  pageSize = 30;
  pageSizeOptions: number[] = [10, 30, 50];

  pageEvent: PageEvent;

  constructor(public snackBar: MdSnackBar,
              public dialog: MdDialog,
              private searchUsersService: SearchUsersService) {
  }

  ngOnInit() {
  }

  openDialog(login) {
    this.searchUsersService.getDetailsByUserName(login).subscribe(
      response => {
        this.dialog.open(UserInfoComponent, {
          data: {user: response},
          height: '80vh'
        });
      },
      error => {
        console.error(error);
      }
    );
  }

  search(location: string, language: string) {
    this.error_text = '';

    if (location || language) {
      this.location = location;
      this.language = language;
      this.per_page = this.pageEvent ? this.pageEvent.pageSize : this.pageSize;
      this.page = this.pageEvent ? (this.pageEvent.pageIndex + 1) : 1;

      this.searchUsersService.getUsersByLocationAndLanguage(location, language, this.page, this.per_page).subscribe(
        response => {
          this.results = response.items;
          this.length = response.total_count;

          if (!this.pageEvent) {
            this.snackBar.open(`${response.total_count} users found`, null, {
              duration: 5000
            });
          }
        },
        () => {
          this.results = [];
          this.snackBar.open('Please specify your search qualifiers', null, {
            duration: 5000
          });
        }
      );
    }
  }
}
