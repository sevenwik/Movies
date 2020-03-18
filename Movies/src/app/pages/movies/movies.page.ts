import { MovieService } from './../../services/movie.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
 
@Component({
  selector: 'app-movies',
  templateUrl: './movies.page.html',
  styleUrls: ['./movies.page.scss'],
})
export class MoviesPage implements OnInit {
 
  results: Observable<any>;
  searchTerm: string = '';
  movies: any = [];
  venues: any;
 
  /**
   * Constructor of our first page
   * @param movieService The movie Service to get data
   */
  constructor(private movieService: MovieService) { 
    
  }
 
  ngOnInit() {
    this.loadMovies();
   }
 
  loadMovies(){
    this.movieService.load().subscribe(results => {
      if(results)
      {
        this.venues = results.Movies.cinemas.BookMyShow.aiVN;
        this.movies = results.Movies.moviesData.BookMyShow.arrEvents.Child;
      }
    });
  }
}