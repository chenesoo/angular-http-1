import { Component, OnInit } from '@angular/core';
import { Image } from './picsum.model';
import { ImageService } from './picsum.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  name = 'Angular';
  imageList: Image[] | undefined;

  constructor(private imageService: ImageService) {}

  ngOnInit(): void {
    this.imageService.getImageList().then((x) => {
      this.imageList = x;
    });
  }
}
