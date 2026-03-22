import { Episode } from './episode.model';

export class Season {
  season: number = 0;
  startedAiring: string = '';
  poster: string = '';
  episodes: Episode[] = [];
}
