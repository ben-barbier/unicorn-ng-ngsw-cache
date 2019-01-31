import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Unicorn} from '../models/unicorn.model';
import {Observable} from 'rxjs';
import {SwCacheService} from './cache.service';

@Injectable({
    providedIn: 'root'
})
export class UnicornsService {

    constructor(private http: HttpClient,
                private cache: SwCacheService) {
    }

    public delete(unicorn: Unicorn): Observable<void> {
        return this.http.delete<void>(`/rs/unicorns/${unicorn.id}`).pipe(
            this.cache.delete({cacheName: 'api-unicorns-list', url: '/rs/unicorns'}),
            this.cache.delete({cacheName: 'api-unicorn-detail', url: `/rs/unicorns/${unicorn.id}`}),
        );
    }

    public getAll(): Observable<Unicorn[]> {
        return this.http.get<Unicorn[]>('/rs/unicorns');
    }

    public get(unicornId: number): Observable<Unicorn> {
        return this.http.get<Unicorn>(`/rs/unicorns/${unicornId}`);
    }

}
