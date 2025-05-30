import { render } from '@testing-library/angular';

import { RestaurantListComponent } from '@/app/components/restaurant-list/restaurant-list.component';
import { LoadRestaurantsService } from '@/app/services/load-restaurants.service';

describe('RestaurantListComponent', () => {
  it('load restaurants on first render', async () => {
    const loadRestaurants = jest.fn().mockName('loadRestaurants');

    await render(RestaurantListComponent, {
      componentProviders: [
        {
          provide: LoadRestaurantsService,
          useValue: {
            loadRestaurants,
          },
        },
      ],
    })

    expect(loadRestaurants).toHaveBeenCalled();
  })
});
