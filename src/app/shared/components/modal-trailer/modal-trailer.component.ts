import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-modal-trailer',
  templateUrl: './modal-trailer.component.html',
  styleUrls: ['./modal-trailer.component.css']
})
export class ModalComponent implements OnInit {

  @Input() visible: boolean = false;
  @Input() classiClass: boolean = true;
  @Input() titleModal: string;
  @Input() subTitleModal: string;
  @Input() urlTrailerModal: string;
  @Output() closeModal = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  close() {
   this.closeModal.emit(false);
  }
}
