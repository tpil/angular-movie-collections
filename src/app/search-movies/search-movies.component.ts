import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-search-movies',
  templateUrl: './search-movies.component.html',
  styleUrls: ['./search-movies.component.scss']
})
export class SearchMoviesComponent implements OnInit {

  API_KEY:string='85204a8cc33baf447559fb6d51b18313';
  term: string='';
  movies:any;

  constructor(private _http: HttpClient) { }

  ngOnInit(): void {
    
  }

  getMovies(){
    let searchParams =new HttpParams();
    searchParams =searchParams.append('language','en-US');
    searchParams =searchParams.append('page','1');
    searchParams =searchParams.append('include_adult','false');
    searchParams =searchParams.append('query',this.term);
  
    return this._http.get(`https://api.themoviedb.org/3/search/movie?api_key=${this.API_KEY}`,{
      params:searchParams
    }).subscribe(data=>{
      this.movies=[data];
      console.log( this.movies[0].results);
      this.movies=this.movies[0].results;
    });
  }

}
