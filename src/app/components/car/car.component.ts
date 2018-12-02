import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { Car } from 'src/app/models/car.type';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CarComponent {
  @Input() car: Car;
}
