import { Component, OnInit } from '@angular/core';
import { LoadRestaurantsService } from '@/app/services/load-restaurants.service';
import { AsyncPipe, NgForOf } from '@angular/common';
import { Observable } from 'rxjs';

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
