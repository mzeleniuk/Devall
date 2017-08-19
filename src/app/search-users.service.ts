import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class SearchUsersService {
  private searchUsersEndPoint = 'https://api.github.com/search/users?q=';
  private getUserDetailsEndPoint = 'https://api.github.com/users/';

  constructor(private http: Http) { }

  getUsersByLocationAndLanguage(location: string, language: string) {
    let url;

    if (location && !language) {
      url = `${this.searchUsersEndPoint}location:${location}`;
    } else if (!location && language) {
      url = `${this.searchUsersEndPoint}language:${language}`;
    } else {
      url = `${this.searchUsersEndPoint}location:${location}+language:${language}`;
    }

    return this.http.get(url)
      .map(this.extractData)
      .catch(this.handleError);
  }

  getDetailsByUserName(username: string) {
    if (username) {
      const url = `${this.getUserDetailsEndPoint}${username}`;

      return this.http.get(url)
        .map((response: Response) => response.json())
        .catch(this.handleError);
    }
  }

  private extractData(response: Response) {
    const body = response.json();

    return body || {};
  }

  private handleError(error: Response | any) {
    let errMsg: string;

    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);

      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }

    console.error(errMsg);

    return Observable.throw(errMsg);
  }
}
