import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-slide',
  templateUrl: './show-slide.component.html',
  styleUrls: ['./show-slide.component.scss'],
})
export class ShowSlideComponent implements OnInit {
  slideOpts = {
    slidesPerView: 1,
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    }
  }
  constructor() { }

  ngOnInit() {}

}
