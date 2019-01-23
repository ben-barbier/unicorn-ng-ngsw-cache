import {Injectable} from '@angular/core';
import {from, Observable} from 'rxjs';
import {mergeMap, tap} from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class CacheService {

    /**
     * RxJS operator that remove cache entry and wait remove action callback
     *
     * Example usage:
     * ```
     * constructor(private http: HttpClient,
     *             private cache: CacheService) {
     * }
     *
     * public delete(unicorn: Unicorn): Observable<void> {
     *    return this.http.delete<void>(`/rs/unicorns/${unicorn.id}`).pipe(
     *      this.cache.delete('api-unicorns-list', '/rs/unicorns'),
     *      this.cache.delete('api-unicorn-detail', `/rs/unicorns/${unicorn.id}`),
     *    );
     * }
     * ```
     *
     * @param cacheName - Name of the datagroup in ngsw-config.json
     * @param request - Request to remove from the ngsw-config datagroup
     */
    public delete = (cacheName: string, request: string) => <T>(source: Observable<T>): Observable<T> =>
        new Observable<T>(observer => source.pipe(
            mergeMap(projet => from(this.removeEntryFromSwCache(cacheName, request)).pipe(
                tap(() => observer.next(projet))
            )),
        ).subscribe())

    private async removeEntryFromSwCache(cacheName: string, request: string): Promise<boolean> {
        const cacheKeys = await caches.keys();
        const cacheKey = cacheKeys.find(name => name.includes(`${cacheName}:cache`));
        const cache = await caches.open(cacheKey);
        return cache.delete(request);
    }

}
