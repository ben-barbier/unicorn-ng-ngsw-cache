import {Component} from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {

    constructor() {
    }

    public flushList(): Promise<boolean> {
        return this.removeEntryFromSwCache('api-unicorns-list', '/rs/unicorns');
    }


    public flushOnce(unicornId: number): Promise<boolean> {
        return this.removeEntryFromSwCache('api-unicorn-detail', `/rs/unicorns/${unicornId}`);
    }


    private removeEntryFromSwCache(cacheName: string, request: string): Promise<boolean> {
        return caches.keys().then(cachesNames => {
            const fullCacheName = cachesNames.find(name => name.includes(`${cacheName}:cache`));
            return caches.open(fullCacheName).then(function (cache) {
                return cache.delete(request);
            });
        });
    }

}
