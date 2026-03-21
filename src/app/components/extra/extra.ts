import { Component, Input } from '@angular/core';
import { NgClass, NgIf } from '@angular/common';

@Component({
  selector: 'app-extra',
  imports: [NgClass],
  templateUrl: './extra.html',
})
export class Extra {
  open: boolean = false;

  @Input() episodeData: any;
}
