import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QuoteService {
  quoteUrl = 'https://pixabay.com/api/?key=13326038-15572ce5ea4ad42826615c92a&image_type=photo&pretty=true&per_page=10';
  nextUrl = 'https://pixabay.com/api/?key=13326038-15572ce5ea4ad42826615c92a&image_type=photo&pretty=true&per_page=10&page=';
  options = {
    headers: new HttpHeaders()
      .set('x-rapidapi-host', 'quotes.p.rapidapi.com')
      .set('x-rapidapi-key', '3d03626006msha1cee5a14eb2ec8p128933jsne919c4f97ed5')
  }
  constructor(private http: HttpClient) {
  }
  getQuotes() {
    console.log('Came to service');
    return this.http.get(this.quoteUrl);
  }
  getNewQuotes() {
    return this.http.get(this.nextUrl + Number(sessionStorage.getItem('page') + 1));
  }

}
