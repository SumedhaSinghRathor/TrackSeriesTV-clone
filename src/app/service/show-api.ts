import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Show } from '../models/show.model';

@Injectable({
  providedIn: 'root',
})
export class ShowApi {
  private apiUrl = 'http://localhost:3000/shows';

  constructor(private http: HttpClient) {}

  getShows(): Observable<Show[]> {
    return this.http.get<Show[]>(this.apiUrl);
  }

  getShow(id: number): Observable<Show> {
    return this.http.get<Show>(`${this.apiUrl}/${id}`);
  }
}
