import { Observable, of } from "rxjs";

import { RestaurantModel } from "@/app/models/restaurant.model";

export class LoadRestaurantsService {
  loadRestaurants(): Observable<RestaurantModel[] | undefined> {
    return of(undefined);
  }
}

