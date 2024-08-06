import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [NgIf, NgFor],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {
  userClick: boolean = false;
  imgSrc: string = '';
  imgs: string[] = [
    './assets/images/poert1.png',
    './assets/images/port2.png',
    './assets/images/port3.png',
    './assets/images/poert1.png',
    './assets/images/port2.png',
    './assets/images/port3.png',
  ];

  showImage(i: number): void {
    this.userClick = true;
    this.imgSrc = this.imgs[i];
  }

  hideContain(event: Event): void {
    if (!(event.target instanceof HTMLImageElement)) {
      this.userClick = false;
    }
  }
}
