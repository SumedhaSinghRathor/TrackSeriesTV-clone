import { Component, OnInit } from '@angular/core';
import { AsyncPipe, DatePipe, NgForOf, NgIf } from '@angular/common';
import { Show } from '../../models/show.model';
import { ShowApi } from '../../service/show-api';
import { Observable } from 'rxjs';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-myshows',
  standalone: true,
  imports: [NgForOf, AsyncPipe, DatePipe, NgIf, RouterLink],
  templateUrl: './myshows.html',
})
export class Myshows implements OnInit {
  shows$!: Observable<Show[]>;

  constructor(public showService: ShowApi) {}

  ngOnInit(): void {
    this.shows$ = this.showService.getShows();
  }

  makeSlug(title: string): string {
    return title
      .toLocaleLowerCase()
      .replace(/[^a-zA-Z0-9]/g, '-')
      .replace(/(^-|-$)/g, '');
  }

  goToShow(show: Show) {
    const slug = this.makeSlug(show.title);
    return ['/shows', show.id, slug, show.seasons?.at(-1)?.season];
  }
}
