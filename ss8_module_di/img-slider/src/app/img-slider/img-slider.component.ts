import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-img-slider',
  templateUrl: './img-slider.component.html',
  styleUrls: ['./img-slider.component.css']
})
export class ImgSliderComponent implements OnInit {
  listImage = [
    'https://via.placeholder.com/1280x420/e91e63/ffffff?text=1',
    'https://via.placeholder.com/1280x420/e91e63/ffffff?text=2',
    'https://via.placeholder.com/1280x420/e91e63/ffffff?text=3',
    'https://via.placeholder.com/1280x420/e91e63/ffffff?text=4'
  ];

  constructor() {
  }

  private index = 0;
  src = this.listImage[this.index];

  ngOnInit(): void {
  }

  previous() {
    if (this.index > 0) {
      this.index--;
      this.src = this.listImage[this.index];
    }else {
      this.index = this.listImage.length;
      this.src = this.listImage[this.index];
    }
  }

  next() {
    if (this.index < this.listImage.length) {
      this.index++;
      this.src = this.listImage[this.index];
    }else {
      this.index = 0;
      this.src = this.listImage[this.index];
    }
  }
}
