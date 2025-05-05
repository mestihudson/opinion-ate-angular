import { Component } from '@angular/core';
import { RestaurantScreenComponent } from './components/restaurant-screen/restaurant-screen.component';

@Component({
  selector: 'app-root',
  imports: [RestaurantScreenComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
}
