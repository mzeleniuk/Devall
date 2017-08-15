import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-users',
  templateUrl: './search-users.component.html',
  styleUrls: ['./search-users.component.css']
})

export class SearchUsersComponent implements OnInit {
  location: string;
  language: string;

  constructor() {
  }

  ngOnInit() {
  }

  search(location: string, language: string) {
    this.location = location;
    this.language = language;

    console.log(this.location, this.language);
  }
}
