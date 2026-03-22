import { Component, OnInit } from '@angular/core';
import { NgForOf, NgIf } from '@angular/common';
import { SearchItem } from '../../components/search-item/search-item';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [NgForOf, SearchItem, NgIf],
  templateUrl: './search.html',
})
export class Search implements OnInit {
  allpieces = [
    {
      title: "Tamon's B-Side",
      cover: 'https://static.trackseries.tv/banners/1iTCxEIK1xlmIXjHcLjt0UyOU8w_medium.jpg',
      banner: 'https://static.trackseries.tv/banners/series/451101/banners/6934d22e935b4_large.jpg',
      tvStation: 'Tokyo MX',
      year: 2026,
      followers: 18,
      description:
        'Utage Kinoshita is a high school girl who works part-time as a housekeeper. She has devoted her life to her favorite idol, Tamon Fukuhara, from the group F/ACE. Then one day, Utage ends up being assigned to Tamon’s house! There she discovers that off-stage, he is nothing like his wild idol persona. A gloomy, introverted boy with no self-confidence, Utage still finds herself falling for him anyway.',
    },
    {
      title: 'Journal with Witch',
      cover: 'https://static.trackseries.tv/banners/g6lhU9a8YOWKJyfJ7J2aajzKm4k_medium.jpg',
      banner: 'https://static.trackseries.tv/banners/series/449723/banners/695a9e0d6a7cd_large.jpg',
      tvStation: 'BS Asahi',
      year: 2026,
      followers: 20,
      description:
        'Reclusive novelist Makio Koudai has always preferred the company of books—but when her sister and brother-in-law pass away, Makio unexpectedly becomes the guardian of her 15-year-old niece, Asa Takumi. As they navigate grief, clashing personalities, and the challenges of living together, the two slowly open their hearts to each other, discovering warmth, understanding, and the meaning of family.',
    },
    {
      title: 'Hana-Kimi',
      cover: 'https://static.trackseries.tv/banners/wCZn0Is62Tx4HC9WuFGYysjeHCx_medium.jpg',
      banner: 'https://static.trackseries.tv/banners/placeholder/serie_banner.png',
      tvStation: 'Tokyo MX',
      year: 2026,
      followers: 11,
      description:
        'Mizuki Ashiya is on a mission: disguise herself as a boy and enroll in a male boarding school to meet her idol, high jump star Izumi Sano. But after successfully infiltrating the school, she discovers he’s suddenly quit the sport! Now Mizuki must dodge suspicion, protect her cover, and somehow reach the boy she came all this way for—all while surviving the chaos of an all-boys dorm!',
    },
    {
      title: 'Lovely★Complex',
      cover: 'https://static.trackseries.tv/banners/dhadiTPPbM1m6eyBKwMr10CYLut_medium.jpg',
      banner:
        'https://static.trackseries.tv/banners/https://assets.fanart.tv/fanart/lovely-complex-67874dd261fd8_large.jpg',
      tvStation: 'CBC',
      year: 2007,
      followers: 11,
      description:
        'Love is unusual for Koizumi Risa and Ootani Atsushi, who are both striving to find their ideal partner in high school—172 cm tall Koizumi is much taller than the average girl, and Ootani is much shorter than the average guy at 156 cm.',
    },
    {
      title: 'Kamisama Kiss',
      cover: 'https://static.trackseries.tv/banners/6SYc4QlshFxAYsK33njymMUBfJD_medium.jpg',
      banner:
        'https://static.trackseries.tv/banners/https://assets.fanart.tv/fanart/kamisama-hajimemashita-6396faa6de993_large.jpg',
      tvStation: 'TV Tokyo',
      year: 2015,
      followers: 123,
      description:
        'Nanami was just a normal high school girl down on her luck until a stranger’s lips marked her as the new Land God and turned her world upside down. Now, she’s figuring out the duties of a deity with the help of Tomoe, a reformed fox demon who reluctantly becomes her familiar in a contract sealed with a kiss. The new responsibilities—and boys—are a lot to handle, like the crow demon masquerading as a gorgeous pop idol and the adorable snake spirit who’s chosen the newly minted god to be his bride. As the headstrong Tomoe tries to whip her into shape, Nanami finds that love just might have cute, pointed fox ears. With romance in the air, will the human deity be able to prove herself worthy of her new title?',
    },
  ];

  pieces = [...this.allpieces];

  constructor(
    public route: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      const searchItem = params['query'] || '';

      if (!searchItem.trim()) {
        this.pieces = [];
      } else {
        const lowerValue = searchItem.toLowerCase();
        this.pieces = this.allpieces.filter((p) => p.title.toLowerCase().includes(lowerValue));
      }
    });
  }

  filterPieces(value: string) {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { query: value || null },
      queryParamsHandling: 'merge',
    });
  }
}
