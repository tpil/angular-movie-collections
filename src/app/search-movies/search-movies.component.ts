import { Component, OnInit } from '@angular/core';
import {HttpService} from '../http.service';

@Component({
  selector: 'app-search-movies',
  templateUrl: './search-movies.component.html',
  styleUrls: ['./search-movies.component.scss']
})
export class SearchMoviesComponent implements OnInit {

  name: string='';
  movies:any;

  constructor(private _http: HttpService) { }

  ngOnInit(): void {
    
  }
  
  fetchMovies(){
    this._http.getMovies().subscribe(data=>{
      this.movies=data;
      console.log(this.movies);
    });
  }

}
