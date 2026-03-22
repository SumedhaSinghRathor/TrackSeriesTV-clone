import { Component, OnInit } from '@angular/core';
import { Show } from '../../models/show.model';
import { DatePipe } from '@angular/common';
import { ShowApi } from '../../service/show-api';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-show-page',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './show-page.html',
})
export class ShowPage implements OnInit {
  show?: Show;

  constructor(
    private showService: ShowApi,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.loadShow(id);
  }

  loadShow(id: number): void {
    this.showService.getShow(id).subscribe({
      next: (data) => {
        this.show = data;
        console.log(data);
      },
      error: (err) => {
        console.error('Error loading show: ', err);
      },
    });
  }
}
