import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Episode } from '../../models/episode.model';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-ep-grid',
  imports: [DatePipe],
  templateUrl: './ep-grid.html',
})
export class EpGrid {
  @Input() episode?: Episode;
  @Input() currentSeason!: any;

  @Output() infoRequested = new EventEmitter<any>();

  showEpInfo(episode: any) {
    this.infoRequested.emit(episode);
  }
}
