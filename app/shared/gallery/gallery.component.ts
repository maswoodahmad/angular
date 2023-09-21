import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css'],
})
export class GalleryComponent {
  pictures: string[] = [];

  ngOnInit() {
    this.pictures = new Array(5).fill(0).map(this.generateImage);
  }
  generateImage() {
    return `https://picsum.photos/200/200?ts ${Math.random() * 10 + 1}`;
  }
}
