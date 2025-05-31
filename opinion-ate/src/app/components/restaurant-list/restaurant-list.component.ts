import { AsyncPipe, NgForOf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { LoadRestaurantsService } from '@/app/services/load-restaurants.service';

@Component({
  imports: [AsyncPipe, NgForOf],
  selector: 'app-restaurant-list',
  templateUrl: './restaurant-list.component.html'
})
export class RestaurantListComponent implements OnInit {
  restaurants$!: Observable<any>;

  constructor(private service: LoadRestaurantsService) { }

  ngOnInit(): void {
    this.restaurants$ = this.service.loadRestaurants();
  }
}
