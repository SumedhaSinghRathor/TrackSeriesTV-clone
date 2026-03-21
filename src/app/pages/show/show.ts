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
            epDesc:
              'Abandoned by her father, Nanami finds herself homeless when she meets a man who offers his own home to her. His home turns out to be a shrine where his supernatural household awaits the return of their lord and master after a 20-year absence.',
          },
          {
            epTitle: 'The God Becomes a Target',
            epThumbnail:
              'https://static.trackseries.tv/banners/sY4MQYSJOspcgBIUGYD53aIqUia_small.jpg',
            epDesc:
              'Nanami discovers that Kurama, a famous pop star, has transferred to her high school, which spurs her to return to school. However, as a weak land god, her life may be at risk if she wanders outside the shrine alone.',
          },
          {
            epTitle: 'The God Makes a Match',
            epThumbnail:
              'https://static.trackseries.tv/banners/xmR5QXAh63mCGAD9XQC6k2FmV4_small.jpg',
            epDesc:
              "The land under Mikage Shrine's protection includes Isara Swamp and Himemiko, its guardian mistress, comes to pay her respects to the new land god. And Nanami's divine matchmaking powers are put to the test for the first time.",
          },
          {
            epTitle: 'The God Is Kidnapped',
            epThumbnail:
              'https://static.trackseries.tv/banners/ztWdWxnRmgPEv3FsAvFY1lEuYad_small.jpg',
            epDesc:
              "Nanami saves a pretty white snake at school and for her trouble, she becomes marked as the snake's intended. Tomoe transfers into Nanami's class to protect her, but the snake comes for her anyway.",
          },
          {
            epTitle: 'The God Loses Her Home',
            epThumbnail:
              'https://static.trackseries.tv/banners/5bpCswCssPhkCGd2ZMjDyTMZuPu_small.jpg',
            epDesc:
              "Narukami, god of thunder, has always wanted Tomoe as a familiar for herself. Now that the god he serves is Nanami, a human girl, Narukami sees her chance to take away Nanami's godhood and make Tomoe hers.",
          },
          {
            epTitle: 'The God Catches a Cold',
            epThumbnail:
              'https://static.trackseries.tv/banners/f0X68Sm2MzonlUU4DtOgjymEhoP_small.jpg',
            epDesc:
              "Nanami stays home with a cold while Tomoe goes to school disguised as her in order to keep her attendance rate from slipping. Mizuki takes advantage of Tomoe's absence to pay Nanami a visit.",
          },
          {
            epTitle: 'The God Asks a Boy Out on a Date',
            epThumbnail:
              'https://static.trackseries.tv/banners/Aq79xtr6sZiQ2EI6GfLNrvtIs3W_small.jpg',
            epDesc:
              'Nanami experiments a little with her divine powers while she struggles to define exactly how she feels about Tomoe. And Kurama, being the yokai who has more experience with humans, offers some words of advice to Tomoe.',
          },
          {
            epTitle: 'The God Goes to the Beach',
            epThumbnail:
              'https://static.trackseries.tv/banners/ch4EgC3cr2ZlGvajhVYSoioQQ6b_small.jpg',
            epDesc:
              'Summer break is here and Nanami goes to the beach with her friends to take her mind off her broken heart. Trouble ensues when Tomoe accompanies her and goes into the ocean against his better judgment.',
          },
          {
            epTitle: "The God Goes to the Dragon King's Palace",
            epThumbnail:
              'https://static.trackseries.tv/banners/xyhxlfOEkoby1sVVOew2hOzg9Sr_small.jpg',
            epDesc:
              "In her quest to recover the stolen Dragon King's right eye and return it to him in exchange for Tomoe's freedom, Nanami travels back in time and gets a glimpse of Tomoe's past.",
          },
          {
            epTitle: 'Tomoe Becomes a Familiar / The God Goes to a Mixer',
            epThumbnail:
              'https://static.trackseries.tv/banners/rMc8FBK9LfU3EsNEEpec6zB26wv_small.jpg',
            epDesc:
              'Flashing back to the past, some of what Tomoe went through with Mikage is revealed. And returning to the present for the second part, Nanami gets dragged off to a mixer with her friends.',
          },
          {
            epTitle: 'The Familiar Goes Into Town',
            epThumbnail:
              'https://static.trackseries.tv/banners/hEg2HWF4S9744xcxeMMkFcsk36P_small.jpg',
            epDesc:
              'Mizuki ventures into the city alone to learn the secret to making it in human society like the super popular pop star Kurama. And Nanami drags Tomoe off on a date to the amusement park.',
          },
          {
            epTitle: 'Nanami Quits Being a God',
            epThumbnail:
              'https://static.trackseries.tv/banners/es3fdI3KRary119MWLeKPjh4QJE_small.jpg',
            epDesc:
              "Nanami decides to hold an autumn festival at the shrine to let the locals know that it's not abandoned or haunted. But as she prepares for the festival, Otohiko comes along to throw a wrench into things.",
          },
          {
            epTitle: "I've Started the 'Being a God' Thing",
            epThumbnail:
              'https://static.trackseries.tv/banners/owQKPmiFUspYin4qFKJH5zfDVGn_small.jpg',
            epDesc:
              'Unable to exorcise the miasma encroaching on the shrine, Nanami believes she is useless and leaves. Finding her gone, Tomoe and Mizuki go searching for her, leaving the shrine and the miasma to Onikiri and Kotetsu.',
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
            epDesc:
              'As the land god of the Mikage Shrine, Nanami is invited to the annual gathering of the gods in Izumo, but on the one condition that she must pass a test administered by Otohiko.',
          },
          {
            epTitle: 'The God Goes to Izumo',
            epThumbnail:
              'https://static.trackseries.tv/banners/yNedB0LVVIgHSBrOApSKKk5HRSj_small.jpg',
            epDesc:
              'Now that Nanami is set to go to Izumo to attend the Divine Assembly, she must decide who goes with her - Tomoe or Mizuki. And she must also face the consequences of attending a divine event as a mortal being.',
          },
          {
            epTitle: 'The God Falls Into the Netherworld',
            epThumbnail:
              'https://static.trackseries.tv/banners/iuVApoMTbC91pFE4gFUIEaTh4SE_small.jpg',
            epDesc:
              'Okuninushi, the god hosting the Divine Assembly, asks Nanami to go handle a situation happening on the border between the worlds of the living and the dead.',
          },
          {
            epTitle: 'The God Races Across the Netherworlds',
            epThumbnail:
              'https://static.trackseries.tv/banners/hLyR7zHECa9XpWIgNvJDQSm7VUr_small.jpg',
            epDesc:
              'Izanami imprisons Kirihito and refuses to allow Nanami to return to the surface with him. Nanami must decide how much she believes in her own powers and what she is willing to risk to save him.',
          },
          {
            epTitle: 'The God Makes Her Second Romantic Confession',
            epThumbnail:
              'https://static.trackseries.tv/banners/7QPPdQCzfMxgKzfAWjVBYGkk2zw_small.jpg',
            epDesc:
              'When Tomoe reverted to being a wild fox to save Nanami, he undid his contract as her familiar. And now, he takes this opportunity to reconsider whether he wants to go back to Nanami or not.',
          },
          {
            epTitle: 'God Meets a Little Tengu',
            epThumbnail:
              'https://static.trackseries.tv/banners/3UzWVF5bA0U9u41dBsw0i1eOFYA_small.jpg',
            epDesc:
              'On her way home, Nanami runs into Himemiko and they spend some quality girl time together. Later, she meets a little tengu on a mission.',
          },
          {
            epTitle: 'The God Goes to Mount Kurama',
            epThumbnail:
              'https://static.trackseries.tv/banners/o63WdjWdNXeaqYkU6mNM8jNVYci_small.jpg',
            epDesc:
              'Kurama returns to Mount Kurama with Nanami and Tomoe to take Botanmaru home and see if he can help his ailing father.',
          },
          {
            epTitle: 'The God Sneaks In',
            epThumbnail:
              'https://static.trackseries.tv/banners/uGBAFYdK4X1ZJvoCh2zQit6RrZA_small.jpg',
            epDesc:
              "Kurama's father is sick, but there is no easy way to get in to see him, so the gang must devise a way to get past Jiro's defenses.",
          },
          {
            epTitle: 'The God Is Blindfolded',
            epThumbnail:
              'https://static.trackseries.tv/banners/bGdOpdMH4H08jkNKtTU5iv2f1Vw_small.jpg',
            epDesc:
              'The ruse is simple. Nanami confers her godly powers to Kurama, so he can pretend to be a god, someone Jiro cannot turn away from the gates. While Kurama and Tomoe distract Jiro, Nanami sneaks in to deliver the cure.',
          },
          {
            epTitle: 'The God Receives a Romantic Confession',
            epThumbnail:
              'https://static.trackseries.tv/banners/4UKkQHjmCyKr3AAxBETFpD6ueGl_small.jpg',
            epDesc:
              "The search for the Sojobo's soul leads to an unexpected place and an unexpected confession.",
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
            epDesc:
              "Tomoe gets some insight into Nanami's childhood. And they finally get through the torii gates to see the Year God.",
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

  selectedEpisode: any;

  showEpInfo(episode: any) {
    this.selectedEpisode = episode;
  }
}
