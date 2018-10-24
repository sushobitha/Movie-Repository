import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { SearchService } from './search-service';

@Component({
  selector: 'app-search-component',
  templateUrl: './search-component.component.html',
  styleUrls: ['./search-component.component.css']
})
export class SearchComponentComponent {
  movies: any;
  @Output() movieResults = new EventEmitter<boolean>();
  constructor(private searchService: SearchService) {

  }

  clearall(){
    this.movies = [];
  }

  searchText(term) {
    if (term) {
      this.searchService.searchMovies(term).subscribe(res => {
        this.movies = res;
        this.movies = this.movies.results;
        this.movieResults.emit(this.movies);
      });
    }
  }
 

}
