import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-extra',
  imports: [],
  templateUrl: './extra.html',
})
export class Extra {
  @Input() episodeData: any;

  removeEp() {
    this.episodeData = null;
  }
}
