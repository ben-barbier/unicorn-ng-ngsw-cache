import {Component} from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
    selector: 'app-nav',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.css']
})
export class NavComponent {

    isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
        map(result => result.matches)
    );

    constructor(private breakpointObserver: BreakpointObserver) {
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
