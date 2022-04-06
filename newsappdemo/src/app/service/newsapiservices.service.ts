import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsapiservicesService {

  constructor(private _http:HttpClient) { }
  
  //News API url and API key
  newsApiUrl = "https://newsapi.org/v2/top-headlines";
  apiKey = "c9704f4ddce7497d9cdf0b4119ecc105";

  newsHeadlines(country: string, category: string):Observable<any>
  {
    return this._http.get(this.newsApiUrl + 
                          '?country='+ country + 
                          '&category=' + category + 
                          '&apikey=' + this.apiKey);
  }
}