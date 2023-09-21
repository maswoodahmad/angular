import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarComponent } from './star/star.component';
import { MaterialModule } from '../material/material.module';
import { GalleryComponent } from './gallery/gallery.component';
import { RxjsDemoComponent } from './rxjsDemo.component';
import { SortPipePipe } from './sort-pipe.pipe';
import { CopyrightDirective } from './copyright.directive';



@NgModule({
  declarations: [
    StarComponent,
    GalleryComponent,
    RxjsDemoComponent,
    SortPipePipe,
    CopyrightDirective
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports :[
    StarComponent,
    GalleryComponent,
    RxjsDemoComponent,
    SortPipePipe,
    CopyrightDirective
  ]
})
export class SharedModule { }
