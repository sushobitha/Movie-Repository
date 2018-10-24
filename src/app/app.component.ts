import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  details:any;
  movieResults: any;
  constructor() {

  }

  showResults(results){
    this.movieResults = results;
  }

  showDetails(details) {
    this.details = details;
    console.log(this.details);
  }

}
