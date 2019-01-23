import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Unicorn} from '../models/unicorn.model';
import {Observable} from 'rxjs';
import {CacheService} from './cache.service';

@Injectable({
    providedIn: 'root'
})
export class UnicornsService {

    constructor(private http: HttpClient,
                private cache: CacheService) {
    }

    public delete(unicorn: Unicorn): Observable<void> {
        return this.http.delete<void>(`/rs/unicorns/${unicorn.id}`).pipe(
            this.cache.delete('api-unicorns-list', '/rs/unicorns'),
            this.cache.delete('api-unicorn-detail', `/rs/unicorns/${unicorn.id}`),
        );
    }

    public getAll(): Observable<Unicorn[]> {
        return this.http.get<Unicorn[]>('/rs/unicorns');
    }

    public get(unicornId: number): Observable<Unicorn> {
        return this.http.get<Unicorn>(`/rs/unicorns/${unicornId}`);
    }

}
