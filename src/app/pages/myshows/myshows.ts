import { Component, OnInit } from '@angular/core';
import { AsyncPipe, DatePipe, NgForOf, NgIf } from '@angular/common';
import { Show } from '../../models/show.model';
import { ShowApi } from '../../service/show-api';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-myshows',
  standalone: true,
  imports: [NgForOf, AsyncPipe, DatePipe, NgIf],
  templateUrl: './myshows.html',
})
export class Myshows implements OnInit {
  shows$!: Observable<Show[]>;

  constructor(public showService: ShowApi) {}

  ngOnInit(): void {
    this.shows$ = this.showService.getShows();
  }
}
