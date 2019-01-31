import {Injectable} from '@angular/core';
import {mergeMap, tap} from 'rxjs/operators';
import {from, Observable} from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class SwCacheService {

    /**
     * RxJS operator that remove cache entry and wait remove action callback
     *
     * Example usage:
     * ```
     * constructor(private http: HttpClient,
     *             private cache: SwCacheService) {
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
     * @param cacheEntry :
        *   - cacheName : Name of the datagroup in ngsw-config.json
     *   - url : Request to remove from the ngsw-config datagroup
     *
     */
    public delete = (cacheEntry: CacheEntry) => <T>(source: Observable<T>): Observable<T> =>
        new Observable<T>(observer => source.pipe(
            mergeMap(projet => from(this.removeEntryFromSwCache(cacheEntry)).pipe(
                tap(() => observer.next(projet)),
            )),
        ).subscribe())

    public async removeEntryFromSwCache(cacheEntry: CacheEntry): Promise<boolean> {
        const cacheKeys = await caches.keys();
        const cacheKey = cacheKeys.find(name => name.includes(`${cacheEntry.cacheName}:cache`));
        const cache = await caches.open(cacheKey);
        return cache.delete(cacheEntry.url, cacheEntry.options);
    }

    public async clearCache(): Promise<boolean> {
        debugger;
        const cacheKeys: string[] = await caches.keys();
        const cachesDeleted: boolean[] = await Promise.all(cacheKeys.map(cacheName => caches.delete(cacheName)));
        return cachesDeleted.reduce((acc: boolean, deleted: boolean) => acc && deleted, true);
    }

}

/**
 * @documentation options : https://developer.mozilla.org/fr/docs/Web/API/Cache/delete#Param%C3%A8tres
 */
export class CacheEntry {
    cacheName: string;
    url: RequestInfo;
    options?: CacheQueryOptions = {
        ignoreMethod: false,
        ignoreSearch: false,
        ignoreVary: false,
    };
}
