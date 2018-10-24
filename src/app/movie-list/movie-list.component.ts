import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SearchService } from '../search-component/search-service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  movieDetails:any;
  @Input() movieResults:any;
  @Output() details = new EventEmitter<boolean>();
  constructor(private searchService: SearchService) { }

  ngOnInit() {
  }

  OnMatCardClickEvent(item){
    this.searchService.getMovieDetails(item.id).subscribe((res)=>{
      this.movieDetails = res;
      this.details.emit(this.movieDetails);
    })
  }

}
