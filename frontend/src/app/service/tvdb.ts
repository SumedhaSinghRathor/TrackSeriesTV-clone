import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class Tvdb {
  private readonly baseUrl = environment.apiUrl;
  private token: string | null = null;

  constructor(private readonly http: HttpClient) {}

  login() {
    const body = {
      apikey: environment.apiKey,
    };

    return this.http.post<any>(`${this.baseUrl}/login`, body).pipe(
      tap((res) => {
        this.token = res.data.token;
        localStorage.setItem('tvdb_token', this.token!);
      }),
    );
  }

  private getHeaders() {
    const token = this.token || localStorage.getItem('tvdb_token');

    return new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
  }

  searchSeries(query: string) {
    return this.http.get(`${this.baseUrl}/search?query=${query}&type=series`, {
      headers: this.getHeaders(),
    });
  }

  getSeries(id: number) {
    return this.http.get(`${this.baseUrl}/series/${id}`, { headers: this.getHeaders() });
  }
}
