import { Component, Input } from '@angular/core';
import { Episode } from '../../models/episode.model';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-ep-list',
  imports: [DatePipe],
  templateUrl: './ep-list.html',
})
export class EpList {
  @Input() episode?: Episode;
  @Input() currentSeason!: any;
}
