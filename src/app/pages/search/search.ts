import { Component, OnInit } from '@angular/core';
import { NgForOf, NgIf } from '@angular/common';
import { SearchItem } from '../../components/search-item/search-item';
import { ActivatedRoute, Router } from '@angular/router';
import { ShowApi } from '../../service/show-api';
import { combineLatest } from 'rxjs';
import { Show } from '../../models/show.model';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [NgForOf, SearchItem, NgIf],
  templateUrl: './search.html',
})
export class Search implements OnInit {
  shows: Show[] = [];

  constructor(
    public route: ActivatedRoute,
    private router: Router,
    private showService: ShowApi,
  ) {}

  ngOnInit(): void {
    combineLatest([this.showService.getShows(), this.route.queryParams]).subscribe(
      ([allShows, params]) => {
        const searchItem = params['query'] || '';

        if (!searchItem.trim()) {
          this.shows = [];
        } else {
          const lowerValue = searchItem.toLowerCase();
          this.shows = allShows.filter((s: any) => {
            return s.title.toLowerCase().includes(lowerValue);
          });
        }
      },
    );
  }

  filterShows(value: string) {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { query: value || null },
      queryParamsHandling: 'merge',
    });
  }
}
