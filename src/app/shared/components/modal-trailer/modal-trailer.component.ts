import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-trailer',
  templateUrl: './modal-trailer.component.html',
  styleUrls: ['./modal-trailer.component.css']
})
export class ModalComponent implements OnInit {

  @Input() visible: boolean = false;
  @Input() classiClass: boolean = true;
  @Input() title: string;
  @Input() subTitle: string;

  constructor() { }

  ngOnInit() {
  }

}
