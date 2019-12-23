import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  public mailSent: boolean;
  constructor(public http: HttpClient) {
  }

  sendMessage(body) {
    return this.http
      .post('https://resume-oz.herokuapp.com/sendmail', body);
  }
}
