import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChuckNorrisService {

  constructor(private http: HttpClient) { }

  getFact(): Observable<Fact> {
    return this.http.get<Fact>('https://api.icndb.com/jokes/random');
  }

}
