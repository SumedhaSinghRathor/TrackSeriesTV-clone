import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Show } from '../../models/show.model';
import { CommonModule, DatePipe, UpperCasePipe } from '@angular/common';
import { ShowApi } from '../../service/show-api';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { EpGrid } from '../../components/ep-grid/ep-grid';
import { EpList } from '../../components/ep-list/ep-list';
import { Extra } from '../../components/extra/extra';

@Component({
  selector: 'app-show-page',
  standalone: true,
  imports: [CommonModule, DatePipe, UpperCasePipe, EpGrid, EpList, Extra, RouterLink],
  templateUrl: './show-page.html',
})
export class ShowPage implements OnInit {
  show?: Show;
  currentSeason: number = 1;
  gridView: boolean = true;
  selectedEpisode: any;

  constructor(
    private showService: ShowApi,
    private route: ActivatedRoute,
    private cdr: ChangeDetectorRef,
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const id = Number(params.get('id'));
      if (id) this.loadShow(id);

      const season = Number(params.get('season'));
      if (season) this.currentSeason = season;
    });
  }

  loadShow(id: number): void {
    this.showService.getShow(id).subscribe({
      next: (data) => {
        this.show = data;
        console.log(data);
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error('Error loading show: ', err);
      },
    });
  }

  getEpisodeDate(startDatestr: string | undefined, epNo: number): Date | null {
    if (!startDatestr) return null;
    const date = new Date(startDatestr);
    date.setDate(date.getDate() + (epNo - 1) * 7);
    return date;
  }

  makeSlug(title: any): string {
    return title
      .toLocaleLowerCase()
      .replace(/[^a-zA-Z0-9]/g, '-')
      .replace(/(^-|-$)/g, '');
  }

  sharePage() {
    this.showService.shareCurrentPage();
  }
}
