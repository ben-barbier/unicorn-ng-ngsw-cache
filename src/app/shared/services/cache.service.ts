import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class CacheService {

    public flushList(): Promise<boolean> {
        return this.removeEntryFromSwCache('api-unicorns-list', '/rs/unicorns');
    }

    public flushOne(unicornId: number): Promise<boolean> {
        return this.removeEntryFromSwCache('api-unicorn-detail', `/rs/unicorns/${unicornId}`);
    }

    // TODO: Externalize it...
    private async removeEntryFromSwCache(cacheName: string, request: string): Promise<boolean> {
        const cacheKeys = await caches.keys();
        const cacheKey = cacheKeys.find(name => name.includes(`${cacheName}:cache`));
        const cache = await caches.open(cacheKey);
        return cache.delete(request);
    }
}
