import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewsheadlinesComponent } from './newsheadlines/newsheadlines.component';

const routes: Routes = [
  {path:'', component:NewsheadlinesComponent}, // Home
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
