import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NewsapiservicesService } from '../service/newsapiservices.service';
import { Pipe, PipeTransform } from '@angular/core';

@Component({
  selector: 'app-newsheadlines',
  templateUrl: './newsheadlines.component.html',
  styleUrls: ['./newsheadlines.component.scss']
})
export class NewsheadlinesComponent implements OnInit {

  keyword = "";

  //Variables for Url string concat (Default country is Philippines)
  countryId = "ph";
  categoryId = "";

  //Reactive form variables and arrays for search bar
  searchForm:FormGroup;

  countries =[
    { id: 1, name: "Philippines"},
    { id: 2, name: "United States"},
    { id: 3, name: "United Kingdom"},
    { id: 4, name: "Canada"},
    { id: 5, name: "France"},
    { id: 6, name: "Australia"},
    { id: 7, name: "Argentina"},
    { id: 8, name: "Indonesia"}
  ]

  categories =[
    { id: 1, name: "All Category"},
    { id: 2, name: "Business"},
    { id: 3, name: "Entertainment"},
    { id: 4, name: "General"},
    { id: 5, name: "Health"},
    { id: 6, name: "Science"},
    { id: 7, name: "Sports"},
    { id: 8, name: "Technology"}
  ]

  //Display News Array
  news:any = [];

  constructor(
    private _services:NewsapiservicesService,
    private fb:FormBuilder
  ) {}

  ngOnInit(): void {
    this.searchForm = this.fb.group({
      country: [null],
      category: [null],
      keyword: ''
    });

    this._services.newsHeadlines(this.countryId, this.categoryId).subscribe((result)=>{
      console.log(result);
      this.news = result.articles;
    })
  }

  OnSubmit() {
    //To validate Id values
    console.log("Form Submitted")
    console.log(this.searchForm.value, this.searchForm.get('keyword'))

    if(this.searchForm.get('country').value == 1) this.countryId = "ph";
    else if(this.searchForm.get('country').value == 2) this.countryId = "us";
    else if(this.searchForm.get('country').value == 3) this.countryId = "gb";
    else if(this.searchForm.get('country').value == 4) this.countryId = "ca";
    else if(this.searchForm.get('country').value == 5) this.countryId = "fr";
    else if(this.searchForm.get('country').value == 6) this.countryId = "au";
    else if(this.searchForm.get('country').value == 7) this.countryId = "ar";
    else if(this.searchForm.get('country').value == 8) this.countryId = "id";

    if(this.searchForm.get('category').value == 1) this.categoryId = "";
    else if(this.searchForm.get('category').value == 2) this.categoryId = "business";
    else if(this.searchForm.get('category').value == 3) this.categoryId = "entertainment";
    else if(this.searchForm.get('category').value == 4) this.categoryId = "general";
    else if(this.searchForm.get('category').value == 5) this.categoryId = "health";
    else if(this.searchForm.get('category').value == 6) this.categoryId = "science";
    else if(this.searchForm.get('category').value == 7) this.categoryId = "sports";
    else if(this.searchForm.get('category').value == 8) this.categoryId = "technology";

    this.keyword = this.searchForm.get('keyword').value;

    this._services.newsHeadlines(this.countryId, this.categoryId).subscribe((result)=>{
      console.log(result);
      this.news = result.articles;
    })
  }
}
