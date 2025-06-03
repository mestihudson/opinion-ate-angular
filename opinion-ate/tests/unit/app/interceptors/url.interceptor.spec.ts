import { replaceUrlByPattern } from '@/app/interceptors/url.interceptor';

describe('replaceUrlByPattern', () => {
  it('replace url when pattern is present', () => {
    expect(
      replaceUrlByPattern(
        '/api/restaurants',
        '/api',
        'https://api.outsidein.dev/J0Pv6459MowvA0O824LeiC206V48tW9b'
      )
    )
      .toBe('https://api.outsidein.dev/J0Pv6459MowvA0O824LeiC206V48tW9b/restaurants');
  });

  it('not replace url when pattern is not present', () => {
    expect(
      replaceUrlByPattern(
        '/restaurants',
        '/api',
        'https://api.outsidein.dev/J0Pv6459MowvA0O824LeiC206V48tW9b'
      )
    )
      .toBe('/restaurants');
  });
});
