import { Component, OnInit } from '@angular/core';
import { SearchUsersService } from '../search-users.service';
import { MdSnackBar } from '@angular/material';

@Component({
  selector: 'app-search-users',
  templateUrl: './search-users.component.html',
  styleUrls: ['./search-users.component.css']
})

export class SearchUsersComponent implements OnInit {
  location: string;
  language: string;

  results: any[] = [];
  selected: false;
  error_text: string;

  constructor(public snackBar: MdSnackBar,
              private searchUsersService: SearchUsersService) {
  }

  ngOnInit() {
  }

  search(location: string, language: string) {
    this.selected = false;
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
