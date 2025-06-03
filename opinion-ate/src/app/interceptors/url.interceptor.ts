import { HttpEvent, HttpHandlerFn, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";

export function replaceUrlByPattern(url: string, pattern: string, replacement: string): string {
  if (url.startsWith(pattern)) {
    return url.replace(pattern, replacement);
  }
  return url;
}

export function urlInterceptor(req: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> {
  const url = replaceUrlByPattern(req.url, '/api', 'https://api.outsidein.dev/J0Pv6459MowvA0O824LeiC206V48tW9b');
  return next(req.clone({ url }));
}
