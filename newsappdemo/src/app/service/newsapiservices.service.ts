import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsapiservicesService {

  constructor(private _http:HttpClient) { }

  //News API url
  newsApiUrl = "https://newsapi.org/v2/top-headlines?country=ph&category=business&apiKey=c9704f4ddce7497d9cdf0b4119ecc105";

  //newsheadlines()
  newsHeadlines():Observable<any>
  {
    return this._http.get(this.newsApiUrl);
  }

}
