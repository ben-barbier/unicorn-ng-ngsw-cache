import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Unicorn} from '../models/unicorn.model';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class UnicornsService {

    constructor(private http: HttpClient) {
    }

    public getAll(): Observable<Unicorn[]> {
        return this.http.get<Unicorn[]>('/rs/unicorns');
    }

    public get(unicornId: number): Observable<Unicorn> {
        return this.http.get<Unicorn>(`/rs/unicorns/${unicornId}`);
    }

    public delete(unicorn: Unicorn): Observable<void> {
        return this.http.delete<void>(`/rs/unicorns/${unicorn.id}`);
    }

}
