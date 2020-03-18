import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable, of, Subject } from 'rxjs';
 
 
@Injectable({
  providedIn: 'root'
})
export class MovieService {
  load() {
    const URI = 'http://127.0.0.1:5000/movies/get';
    ///console.log(`Fetching all tasks from ${URI}...`);
    return this.http.get(URI);
}
constructor(private http: HttpClient) {

}
}