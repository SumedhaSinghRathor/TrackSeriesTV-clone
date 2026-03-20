import { Component, OnInit } from '@angular/core';
import { DatePipe, NgForOf, UpperCasePipe, NgClass } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Extra } from '../../components/extra/extra';

@Component({
  selector: 'app-show',
  imports: [NgForOf, DatePipe, UpperCasePipe, NgClass, RouterLink, Extra],
  templateUrl: './show.html',
})
export class Show implements OnInit {
  id: number = 1;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const idParam = params.get('id') || '1';
      this.id = parseInt(idParam, 10) - 1;
    });
  }

  showKSK = {
    title: 'Kamisama Kiss',
    banner: 'https://static.trackseries.tv/banners/cttisz5q4LHwyRYlIj9S7oQa27v.jpg',
    network: 'TV Tokyo',
    country: 'JP',
    runtime: 24,
    contentRating: 'TV-PG',
    showStatus: 'Ended',
    followers: 123,
    startedAiring: new Date(2015, 0, 4, 20, 30, 0),
    description:
      'Nanami was just a normal high school girl down on her luck until a stranger’s lips marked her as the new Land God and turned her world upside down. Now, she’s figuring out the duties of a deity with the help of Tomoe, a reformed fox demon who reluctantly becomes her familiar in a contract sealed with a kiss. The new responsibilities—and boys—are a lot to handle, like the crow demon masquerading as a gorgeous pop idol and the adorable snake spirit who’s chosen the newly minted god to be his bride. As the headstrong Tomoe tries to whip her into shape, Nanami finds that love just might have cute, pointed fox ears. With romance in the air, will the human deity be able to prove herself worthy of her new title?',
    seasons: [
      {
        season: 1,
        poster: 'https://static.trackseries.tv/banners/6SYc4QlshFxAYsK33njymMUBfJD_medium.jpg',
        episodes: [
          {
            epTitle: 'Nanami Becomes A God',
            epThumbnail:
              'https://static.trackseries.tv/banners/4g40WqUrlL1zr4u5R8r25YeItv2_small.jpg',
          },
          {
            epTitle: 'The God Becomes a Target',
            epThumbnail:
              'https://static.trackseries.tv/banners/sY4MQYSJOspcgBIUGYD53aIqUia_small.jpg',
          },
          {
            epTitle: 'The God Makes a Match',
            epThumbnail:
              'https://static.trackseries.tv/banners/xmR5QXAh63mCGAD9XQC6k2FmV4_small.jpg',
          },
          {
            epTitle: 'The God Is Kidnapped',
            epThumbnail:
              'https://static.trackseries.tv/banners/ztWdWxnRmgPEv3FsAvFY1lEuYad_small.jpg',
          },
          {
            epTitle: 'The God Loses Her Home',
            epThumbnail:
              'https://static.trackseries.tv/banners/5bpCswCssPhkCGd2ZMjDyTMZuPu_small.jpg',
          },
          {
            epTitle: 'The God Catches a Cold',
            epThumbnail:
              'https://static.trackseries.tv/banners/f0X68Sm2MzonlUU4DtOgjymEhoP_small.jpg',
          },
          {
            epTitle: 'The God Asks a Boy Out on a Date',
            epThumbnail:
              'https://static.trackseries.tv/banners/Aq79xtr6sZiQ2EI6GfLNrvtIs3W_small.jpg',
          },
          {
            epTitle: 'The God Goes to the Beach',
            epThumbnail:
              'https://static.trackseries.tv/banners/ch4EgC3cr2ZlGvajhVYSoioQQ6b_small.jpg',
          },
          {
            epTitle: "The God Goes to the Dragon King's Palace",
            epThumbnail:
              'https://static.trackseries.tv/banners/xyhxlfOEkoby1sVVOew2hOzg9Sr_small.jpg',
          },
          {
            epTitle: 'Tomoe Becomes a Familiar / The God Goes to a Mixer',
            epThumbnail:
              'https://static.trackseries.tv/banners/rMc8FBK9LfU3EsNEEpec6zB26wv_small.jpg',
          },
          {
            epTitle: 'The Familiar Goes Into Town',
            epThumbnail:
              'https://static.trackseries.tv/banners/hEg2HWF4S9744xcxeMMkFcsk36P_small.jpg',
          },
          {
            epTitle: 'Nanami Quits Being a God',
            epThumbnail:
              'https://static.trackseries.tv/banners/es3fdI3KRary119MWLeKPjh4QJE_small.jpg',
          },
          {
            epTitle: "I've Started the 'Being a God' Thing",
            epThumbnail:
              'https://static.trackseries.tv/banners/owQKPmiFUspYin4qFKJH5zfDVGn_small.jpg',
          },
        ],
      },
      {
        season: 2,
        poster: 'https://static.trackseries.tv/banners/ntoJF5ad7cxv7zIbe7y5GGMZaXl_medium.jpg',
        episodes: [
          {
            epTitle: "I've Started the 'Being a God' Thing Again",
            epThumbnail:
              'https://static.trackseries.tv/banners/q6DsSzOQ3ZDhIiTDL79VqwKdtBD_small.jpg',
          },
          {
            epTitle: 'The God Goes to Izumo',
            epThumbnail:
              'https://static.trackseries.tv/banners/yNedB0LVVIgHSBrOApSKKk5HRSj_small.jpg',
          },
          {
            epTitle: 'The God Falls Into the Netherworld',
            epThumbnail:
              'https://static.trackseries.tv/banners/iuVApoMTbC91pFE4gFUIEaTh4SE_small.jpg',
          },
          {
            epTitle: 'The God Races Across the Netherworlds',
            epThumbnail:
              'https://static.trackseries.tv/banners/hLyR7zHECa9XpWIgNvJDQSm7VUr_small.jpg',
          },
          {
            epTitle: 'The God Makes Her Second Romantic Confession',
            epThumbnail:
              'https://static.trackseries.tv/banners/7QPPdQCzfMxgKzfAWjVBYGkk2zw_small.jpg',
          },
          {
            epTitle: 'God Meets a Little Tengu',
            epThumbnail:
              'https://static.trackseries.tv/banners/3UzWVF5bA0U9u41dBsw0i1eOFYA_small.jpg',
          },
          {
            epTitle: 'The God Goes to Mount Kurama',
            epThumbnail:
              'https://static.trackseries.tv/banners/o63WdjWdNXeaqYkU6mNM8jNVYci_small.jpg',
          },
          {
            epTitle: 'The God Sneaks In',
            epThumbnail:
              'https://static.trackseries.tv/banners/uGBAFYdK4X1ZJvoCh2zQit6RrZA_small.jpg',
          },
          {
            epTitle: 'The God Is Blindfolded',
            epThumbnail:
              'https://static.trackseries.tv/banners/bGdOpdMH4H08jkNKtTU5iv2f1Vw_small.jpg',
          },
          {
            epTitle: 'The God Receives a Romantic Confession',
            epThumbnail:
              'https://static.trackseries.tv/banners/4UKkQHjmCyKr3AAxBETFpD6ueGl_small.jpg',
          },
          {
            epTitle: 'The God Goes Back to Being a Child',
            epThumbnail:
              'https://static.trackseries.tv/banners/a5t4yRqEX4DpaZnu8n0w6trK0e1_small.jpg',
          },
          {
            epTitle: 'The God Recieves a Marriage Proposal',
            epThumbnail:
              'https://static.trackseries.tv/banners/qMjnj9mfDsTsDtMVvZKum5kS24G_small.jpg',
          },
        ],
      },
    ],
  };

  getEpisodeDate(baseDate: string | Date, index: number): Date {
    const date = new Date(this.showKSK.startedAiring);
    date.setDate(date.getDate() + index * 7);
    return date;
  }
}
