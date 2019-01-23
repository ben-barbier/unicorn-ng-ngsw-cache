import {Component} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {UnicornsService} from '../../shared/services/unicorns.service';
import {catchError} from 'rxjs/operators';
import {Observable, throwError} from 'rxjs';
import {Unicorn} from '../../shared/models/unicorn.model';

@Component({
    selector: 'app-detail',
    templateUrl: './detail.component.html',
    styleUrls: ['./detail.component.css']
})
export class DetailComponent {

    public unicorn: Observable<Unicorn>;
    public id: number;
    public missing = false;

    constructor(private unicornsService: UnicornsService,
                private route: ActivatedRoute,
                private router: Router) {
        this.route.params.subscribe((params: Params) => {
            this.missing = false;
            this.id = params.id;
            this.unicorn = this.unicornsService.get(params.id).pipe(
                catchError(e => {
                    this.missing = true;
                    return throwError(e);
                })
            );
        });
    }

    public gotoList(): void {
        this.router.navigate(['']);
    }
}
