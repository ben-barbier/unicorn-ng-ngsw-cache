import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Unicorn} from '../../models/unicorn.model';
import {tap} from 'rxjs/operators';
import {UnicornsService} from '../../services/unicorns.service';
import {CacheService} from '../../services/cache.service';

@Component({
    selector: 'app-unicorn-card',
    templateUrl: './unicorn-card.component.html',
    styleUrls: ['./unicorn-card.component.css']
})
export class UnicornCardComponent {

    @Input()
    public unicorn: Unicorn;

    @Output()
    public deleted = new EventEmitter<Unicorn>();

    constructor(private unicornsService: UnicornsService) {
    }

    public deleteUnicorn(unicorn: Unicorn) {
        this.unicornsService.delete(unicorn).pipe(
            tap(() => this.deleted.emit(unicorn)),
        ).subscribe();
    }

}
