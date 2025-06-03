import { render, screen } from '@testing-library/angular';

import { of } from 'rxjs';

import { RestaurantListComponent } from '@/app/components/restaurant-list/restaurant-list.component';
import { RestaurantModel } from '@/app/models/restaurant.model';
import { LoadRestaurantsService } from '@/app/services/load-restaurants.service';

describe('RestaurantListComponent', () => {
  const renderComponent = async (loadRestaurants) => {
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
  }

  it('load restaurants on first render', async () => {
    const loadRestaurants = jest.fn().mockName('loadRestaurants');

    await renderComponent(loadRestaurants);

    expect(loadRestaurants).toHaveBeenCalled();
  })

  it('display the restaurants', async () => {
    const restaurants: RestaurantModel[] = [
      { name: 'Sushi Place' },
      { name: 'Pizza Place' },
    ];
    const loadRestaurants = jest.fn(() => of(restaurants));

    await renderComponent(loadRestaurants);

    expect(screen.getByText('Sushi Place')).toBeInTheDocument();
    expect(screen.getByText('Pizza Place')).toBeInTheDocument();
  });
});
