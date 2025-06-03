import { Component } from '@angular/core';
import { RestaurantListComponent } from '../restaurant-list/restaurant-list.component';

@Component({
  selector: 'app-restaurant-screen',
  imports: [RestaurantListComponent],
  templateUrl: './restaurant-screen.component.html',
})
export class RestaurantScreenComponent {}
