import { Observable, of } from "rxjs";

import { RestaurantModel } from "@/app/models/restaurant.model";
import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class LoadRestaurantsService {
  loadRestaurants(): Observable<RestaurantModel[] | undefined> {
    return of(undefined);
  }
}

