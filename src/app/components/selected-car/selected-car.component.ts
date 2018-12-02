import { Component, OnInit, Input } from '@angular/core';
import { Car } from 'src/app/models/car.type';

@Component({
  selector: 'app-selected-car',
  templateUrl: './selected-car.component.html',
  styleUrls: ['./selected-car.component.scss']
})
export class SelectedCarComponent {
  @Input() car: Car;
}
