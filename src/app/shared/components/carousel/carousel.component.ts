import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  @Input() image: string;
  @Input() title: string;
  @Input() subtitle: string;
  @Input() vote: string;
  @Input() id: string;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goDetail(){
    this.router.navigate(
      ['/movies/detail', this.id],
    );
  }
}
