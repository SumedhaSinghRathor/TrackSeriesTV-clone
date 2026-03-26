import { Component, OnInit } from '@angular/core';
import { NgForOf, NgIf } from '@angular/common';
import { Show } from '../../models/show.model';
import { Season } from '../../models/season.model';
import { Episode } from '../../models/episode.model';
import { ShowApi } from '../../service/show-api';

@Component({
  selector: 'app-calendar',
  imports: [NgForOf, NgIf],
  templateUrl: './calendar.html',
})
export class Calendar implements OnInit {
  currentDate: Date = new Date();
  episodesMap: any = {};
  weeks: (number | null)[][] = [];

  constructor(private showService: ShowApi) {}

  ngOnInit(): void {
    this.showService.getShows().subscribe({
      next: (shows) => {
        this.episodesMap = this.getEpisodesByDate(shows);
        this.generateCalendar();
      },
      error: (err) => {
        console.error('Error fetching shows: ', err);
      },
    });
  }

  getEpisodesByDate(shows: Show[]) {
    const map: any = {};

    shows.forEach((show) => {
      show.seasons.forEach((season: Season) => {
        season.episodes.forEach((ep: Episode) => {
          if (!ep.epAired) return;

          const date = new Date(ep.epAired).toISOString().split('T')[0];

          if (!map[date]) map[date] = [];

          map[date].push({
            title: show.title,
            ep: `${season.season}x${ep.epNo}`,
          });
        });
      });
    });

    return map;
  }

  generateCalendar() {
    const year = this.currentDate.getFullYear();
    const month = this.currentDate.getMonth();

    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    const weeks: (number | null)[][] = [];
    let week: (number | null)[] = new Array(7).fill(null);

    let day = 1;

    for (let i = firstDay; i < 7; i++) {
      week[i] = day++;
    }
    weeks.push(week);

    while (day <= daysInMonth) {
      week = new Array(7).fill(null);

      for (let i = 0; i < 7 && day <= daysInMonth; i++) {
        week[i] = day++;
      }

      weeks.push(week);
    }

    this.weeks = weeks;
  }

  prevMonth() {
    this.currentDate = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth() - 1);
    this.generateCalendar();
  }

  nextMonth() {
    this.currentDate = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth() + 1);
    this.generateCalendar();
  }

  getDateKey(day: number) {
    const y = this.currentDate.getFullYear();
    const m = String(this.currentDate.getMonth() + 1).padStart(2, '0');
    const d = String(day).padStart(2, '0');

    return `${y}-${m}-${d}`;
  }

  getEpisodes(day: number) {
    const key = this.getDateKey(day);
    return this.episodesMap[key] || [];
  }

  getMonthYear() {
    return this.currentDate.toLocaleString('default', {
      month: 'long',
      year: 'numeric',
    });
  }
}
