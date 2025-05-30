import { Component, OnInit } from '@angular/core';
import { LoadRestaurantsService } from '@/app/services/load-restaurants.service';

@Component({
  selector: 'app-restaurant-list',
  templateUrl: './restaurant-list.component.html'
})
export class RestaurantListComponent implements OnInit {
  constructor(private service: LoadRestaurantsService) { }

  ngOnInit(): void {
    this.service.loadRestaurants();
  }
}
