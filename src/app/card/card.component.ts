import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

import { Car } from '../car.model';

@Component({
  imports: [CommonModule],
  selector: 'app-card',
  standalone: true,
  styleUrls: ['./card.component.css'],
  templateUrl: './card.component.html',
})
export class CardComponent {
  @Input() car: Car;
}
