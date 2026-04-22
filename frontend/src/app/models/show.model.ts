import { Season } from './season.model';

export class Show {
  id: number = 0;
  title: string = '';
  bgBanner: string = '';
  smallBanner: string = '';
  network: string = '';
  country: string = '';
  contentRating: string | null = null;
  showStatus: string = '';
  followers: number = 0;
  description: string = '';
  seasons: Season[] = [];
}
