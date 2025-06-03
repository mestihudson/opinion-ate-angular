import { provideHttpClient, withInterceptors } from '@angular/common/http';
import {
  type ApplicationConfig,
  provideZoneChangeDetection,
} from '@angular/core';

import { urlInterceptor } from '@/app/interceptors/url.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideHttpClient(withInterceptors([urlInterceptor])),
  ],
};
