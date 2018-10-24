import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { SearchComponentComponent } from './search-component/search-component.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { SearchService } from './search-component/search-service';
import {MatCardModule} from '@angular/material/card';
@NgModule({
  imports:      [ BrowserModule, FormsModule, MatIconModule,HttpClientModule, MatCardModule],
  declarations: [ AppComponent, MovieListComponent, SearchComponentComponent, MovieDetailsComponent ],
  bootstrap:    [ AppComponent ],
  providers: [SearchService]
})
export class AppModule { }
