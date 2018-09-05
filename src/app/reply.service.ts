import { Injectable } from '@angular/core';
import { ReplyMessage } from './models/replymessage'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})



export class ReplyService {

  private _url: string = "http://localhost:3000/hi";


  constructor(private http : HttpClient) { }

  getReply(query : string): Observable<ReplyMessage>{
    let data = {text:query};
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'responseType': 'text'
      })
    };
    return this.http.post<ReplyMessage>(this._url, data, httpOptions);
  }

  
}
