import { Pipe, PipeTransform } from '@angular/core';
import { stringify } from 'querystring';

@Pipe({
  name: 'keyword',
  //pure: false
})
export class KeywordPipe implements PipeTransform {

  /* transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  } */

  /* transform(news: any[], filter: any): any {
    if (!news || !filter) {
      return news;
    }
    //Filter news array, news which match and return true will be
    //kept, false will be filtered out
    return news.filter(n => n.title.indexOf(filter.title) !== -1);
  } */

  transform(news: any[], keyword: string) {
    if (!news) {
      return [];
    }
    if (!keyword) {
      return news;
    }
    if (news && keyword) {
      return news.filter(n => {
        return n.title.toLowerCase().includes(keyword.toLowerCase());
      });
    }
  }
}
