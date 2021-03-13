import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  API_KEY:string='85204a8cc33baf447559fb6d51b18313';

  constructor(private http:HttpClient) { }

  getMovies(){
    return this.http.get(`https://api.themoviedb.org/3/search/movie?api_key=${this.API_KEY}&language=en-US&page=1&include_adult=false&query=matrix`);
  }

}
