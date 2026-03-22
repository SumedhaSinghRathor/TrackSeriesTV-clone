import { NgOptimizedImage, DatePipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Show } from '../../models/show.model';

@Component({
  selector: 'app-search-item',
  imports: [RouterLink, NgOptimizedImage, DatePipe],
  templateUrl: './search-item.html',
})
export class SearchItem {
  @Input() show!: Show;

  makeSlug(title: string): string {
    return title
      .toLocaleLowerCase()
      .replace(/[^a-zA-Z0-9]/g, '-')
      .replace(/(^-|-$)/g, '');
  }

  goToShow(show: Show) {
    const slug = this.makeSlug(show.title);
    return ['/shows', show.id, slug, show.seasons[0].season];
  }
}
