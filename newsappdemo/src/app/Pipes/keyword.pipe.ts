import { Pipe, PipeTransform } from '@angular/core';
import { stringify } from 'querystring';

@Pipe({
  name: 'keyword',
})
export class KeywordPipe implements PipeTransform {
  
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
