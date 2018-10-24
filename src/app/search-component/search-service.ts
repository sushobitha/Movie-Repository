import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
@Injectable()
export class SearchService {
  apikey:string = 'a798447460ab83f283809debb7825272';
  constructor(private http: HttpClient) {
  }

  searchMovies(searchText){
    
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${this.apikey}&query=`;
    return this.http.get(`${url}${searchText}`);
  }

  getMovieDetails(id:number){
    const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${this.apikey}`;
    return this.http.get(url);
  }
  

}
