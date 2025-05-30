import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantListComponent } from './restaurant-list.component';

describe('RestaurantListComponent', () => {
  let fixture: ComponentFixture<RestaurantListComponent>;
  let component: RestaurantListComponent;

  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [RestaurantListComponent],
    }),
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(fixture).toMatchSnapshot();
  });
});
