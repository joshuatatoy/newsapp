import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NewsapiservicesService } from '../service/newsapiservices.service';

@Component({
  selector: 'app-newsheadlines',
  templateUrl: './newsheadlines.component.html',
  styleUrls: ['./newsheadlines.component.scss']
})
export class NewsheadlinesComponent implements OnInit {

  //Reactive form variables and arrays for search bar
  searchForm:FormGroup;
  countryId: any;
  categoryId: any;

  countries =[
    { id: 1, name: "Philippines"},
    { id: 2, name: "United States"},
    { id: 3, name: "United Kingdom"},
  ]

  categories =[
    { id: 1, name: "All Category"},
    { id: 2, name: "Business"},
    { id: 3, name: "Entertainment"},
  ]

  //Display News Array
  newsheadlinesDisplay:any = [];

  constructor(
    private _services:NewsapiservicesService,
    private fb:FormBuilder
  ) {}

  ngOnInit(): void {
    this.searchForm = this.fb.group({
      country: [null],
      category: [null]
    });

    this._services.newsHeadlines().subscribe((result)=>{
      console.log(result);
      this.newsheadlinesDisplay = result.articles;
    })
  }

  submit() {
    console.log("Form Submitted")
    console.log(this.searchForm.value)
    
    // Get the Id values from country and category options
    this._services.countryValue= this.searchForm.get('country').value
    this._services.categoryId= this.searchForm.get('category').value
  }
}
