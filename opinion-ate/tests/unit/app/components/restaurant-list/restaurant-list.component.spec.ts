import { render, screen } from '@testing-library/angular';

import { RestaurantListComponent } from '@/app/components/restaurant-list/restaurant-list.component';

describe('RestaurantListComponent', () => {
  it('should have a defined component', async () => {
    await render(RestaurantListComponent)

    expect(screen.getByText("RestaurantList")).toBeVisible();
  })
});
