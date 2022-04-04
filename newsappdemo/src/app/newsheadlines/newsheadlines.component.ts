import { Component, OnInit } from '@angular/core';
import { NewsapiservicesService } from '../service/newsapiservices.service';

@Component({
  selector: 'app-newsheadlines',
  templateUrl: './newsheadlines.component.html',
  styleUrls: ['./newsheadlines.component.scss']
})
export class NewsheadlinesComponent implements OnInit {

  constructor(private _services:NewsapiservicesService) { }

  //Display News Array
  newsheadlinesDisplay:any = [];

  ngOnInit(): void {
    this._services.newsHeadlines().subscribe((result)=>{
      console.log(result);
      this.newsheadlinesDisplay = result.articles;
    })
  }

}
