import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalComponent } from './components/modal-trailer/modal-trailer.component';
import { SanitizerPipe } from '../pipes/sanitizer.pipe';


@NgModule({
  declarations: [
    ModalComponent,
    SanitizerPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

  ],
  exports: [
    ModalComponent,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: []
})
export class SharedModule { }
