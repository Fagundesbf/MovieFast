import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalComponent } from './components/modal-trailer/modal-trailer.component';


@NgModule({
  declarations: [
    ModalComponent,
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
