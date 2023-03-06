import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { Car } from './car.model';
import { CardComponent } from './card/card.component';

@Component({
  imports: [CommonModule, CardComponent],
  selector: 'app-root',
  standalone: true,
  styleUrls: ['./app.component.css'],
  templateUrl: './app.component.html',
})
export class AppComponent {
  cars: Car[] = [
    {
      color: `bright-orange`,
      heading: `Sedans`,
      imagePath: `sedans`,
      text: `Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.`,
    },
    {
      color: `dark-cyan`,
      heading: `SUVs`,
      imagePath: `suvs`,
      text: `Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.`,
    },
    {
      color: `very-dark-cyan`,
      heading: `Luxury`,
      imagePath: `luxury`,
      text: `Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style.`,
    },
  ];
  title = '3-column-preview-card-component';
}
