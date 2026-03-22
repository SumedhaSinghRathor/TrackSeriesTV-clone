import { NgOptimizedImage } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-search-item',
  imports: [RouterLink, NgOptimizedImage],
  templateUrl: './search-item.html',
})
export class SearchItem {
  @Input() show: any;
}
