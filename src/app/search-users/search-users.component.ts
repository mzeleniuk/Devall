import { Component, OnInit } from '@angular/core';
import { SearchUsersService } from '../search-users.service';
import { UserInfoComponent } from '../user-info/user-info.component';
import { MdSnackBar, MdDialog } from '@angular/material';

@Component({
  selector: 'app-search-users',
  templateUrl: './search-users.component.html',
  styleUrls: ['./search-users.component.css']
})

export class SearchUsersComponent implements OnInit {
  location: string;
  language: string;

  results: any[] = [];
  error_text: string;

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

      this.searchUsersService.getUsersByLocationAndLanguage(location, language).subscribe(
        response => {
          this.results = response.items;
          this.snackBar.open(`${response.total_count} users found`, null, {
            duration: 5000
          });
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
