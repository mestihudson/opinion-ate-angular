import { Observable } from 'rxjs';

import { RestaurantModel } from '@/app/models/restaurant.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class LoadRestaurantsService {
  constructor(private http: HttpClient) {}

  loadRestaurants(): Observable<RestaurantModel[] | undefined> {
    return this.http.get<RestaurantModel[]>('/api/restaurants');
  }
}
