import { Component, OnInit } from '@angular/core';
import { QuoteService } from './quote.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'PhotosApp';
  constructor(public quoteService: QuoteService) { }
  name = 'Angular';
  loadMore = false;
  hits: Object;
  loader = false;
  ngOnInit() {
    //called after the constructor and called  after the first ngOnChanges() 
    console.log('Before Func Call');
    this.quoteService.getQuotes().subscribe(data => {
      console.log('hits', data);
      this.hits = data['hits'];
      this.loadMore = true;
      if (sessionStorage.getItem('page') == null) {
        sessionStorage.setItem('page', '1');
      }
      console.log('sessionStorage');
    });
    console.log('this.hits', this.hits);
  }
  nextBatch() {
    this.loader = true;
    this.hits = [];
    this.quoteService.getNewQuotes().subscribe(data => {
      console.log('hits', data);
      this.hits = data['hits'];
      this.loader = false;
      sessionStorage.setItem('page', String(Number(sessionStorage.getItem('page')) + 1));
    });
  }
}
