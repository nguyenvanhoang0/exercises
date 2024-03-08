import { Component } from '@angular/core';
interface slide {
  img: string,
  zindex: number,
}


@Component({
  selector: 'app-slide-basic',
  templateUrl: './slide-basic.component.html',
  styleUrls: ['./slide-basic.component.scss']
})
export class SlideBasicComponent {
  slideContent: slide[] = [
    {
      img: "../../../../assets/img/cover_image/du-bao-khai-huyen.jpg",
      zindex: 1,
    },
    {
      img: "../../../../assets/img/cover_image/du-bao-khai-huyen.jpg",
      zindex: 2,
    },{
      img: "../../../../assets/img/cover_image/du-bao-khai-huyen.jpg",
      zindex: 3,
    // },{
    //   img: "../../../../assets/img/cover_image/du-bao-khai-huyen.jpg",
    //   zindex: 4,
    // },{
    //   img: "../../../../assets/img/cover_image/du-bao-khai-huyen.jpg",
    //   zindex: 5,
    // },{
    //   img: "../../../../assets/img/cover_image/du-bao-khai-huyen.jpg",
    //   zindex: 6,
    },
  ]
}
