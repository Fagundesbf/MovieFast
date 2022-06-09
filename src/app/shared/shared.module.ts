import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SanitizerPipe } from '../pipes/sanitizer.pipe';

import { ModalComponent } from './components/modal-trailer/modal-trailer.component';
import { CarouselComponent } from './components/carousel/carousel.component';


@NgModule({
  declarations: [
    ModalComponent,
    CarouselComponent,
    SanitizerPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

  ],
  exports: [
    ModalComponent,
    CarouselComponent,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: []
})
export class SharedModule { }
