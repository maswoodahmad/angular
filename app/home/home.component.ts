import { MessageService } from '../shared/message.component';
import { GalleryComponent } from './../shared/gallery/gallery.component';
import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  @ViewChild(GalleryComponent)
  gallery!: GalleryComponent;
  addNewPicture() {
    this.gallery.pictures.push(this.gallery.generateImage());
  }
  removeFirstPicture() {
    this.gallery.pictures.shift();
  }

  // Injection from MessageService file of message 
  constructor(public message: MessageService) {}
}
