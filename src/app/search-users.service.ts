import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class SearchUsersService {
  private searchUsersEndPoint = 'https://api.github.com/search/users?q=';
  private getUserDetailsEndPoint = 'https://api.github.com/users/';

  constructor(private http: HttpClient) { }

  getUsersByLocationAndLanguage(location: string, language: string, page: number, per_page: number) {
    let url;

    if (location && !language) {
      url = `${this.searchUsersEndPoint}location:${location}`;
    } else if (!location && language) {
      url = `${this.searchUsersEndPoint}language:${language}`;
    } else {
      url = `${this.searchUsersEndPoint}location:${location}+language:${language}`;
    }

    return this.http.get(`${url}&page=${page}&per_page=${per_page}`)
      .map(this.extractData)
      .catch(this.handleError);
  }

  getDetailsByUserName(username: string) {
    if (username) {
      const url = `${this.getUserDetailsEndPoint}${username}`;

      return this.http.get(url)
        .map((response: Response) => response)
        .catch(this.handleError);
    }
  }

  private extractData(response: Response) {
    return response || {};
  }

  private handleError(error: Response | any) {
    let errMsg: string;

    if (error instanceof Response) {
      const body = error || '';
      const err = body['error'] || JSON.stringify(body);

      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }

    console.error(errMsg);

    return Observable.throw(errMsg);
  }
}
