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
  resetPage: boolean;
  searching: boolean;
  loading: boolean;

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
    this.searching = false;
    this.loading = false;
  }

  openDialog(login) {
    this.loading = true;

    this.searchUsersService.getDetailsByUserName(login).subscribe(
      response => {
        this.dialog.open(UserInfoComponent, {
          data: {user: response},
          height: '80vh'
        });

        this.loading = false;
      },
      error => {
        console.error(error);

        this.loading = false;
      }
    );
  }

  search(location: string, language: string, resetPage: boolean) {
    this.searching = true;
    this.error_text = '';

    if (location || language) {
      this.location = location;
      this.language = language;
      this.resetPage = resetPage;
      this.per_page = this.pageEvent ? this.pageEvent.pageSize : this.pageSize;
      this.page = this.pageEvent ? (this.pageEvent.pageIndex + 1) : 1;
      this.page = resetPage ? 1 : this.page;

      this.searchUsersService.getUsersByLocationAndLanguage(location, language, this.page, this.per_page).subscribe(
        response => {
          this.results = response.items;
          this.length = response.total_count;
          this.searching = false;

          if (!this.pageEvent) {
            this.snackBar.open(`${response.total_count} users found`, null, {
              duration: 5000
            });
          }
        },
        () => {
          this.results = [];
          this.searching = false;

          this.snackBar.open('Please specify your search qualifiers', null, {
            duration: 5000
          });
        }
      );
    }
  }
}
