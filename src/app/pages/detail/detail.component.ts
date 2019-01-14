import {Component} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {UnicornsService} from '../../shared/services/unicorns.service';

@Component({
    selector: 'app-detail',
    templateUrl: './detail.component.html',
    styleUrls: ['./detail.component.css']
})
export class DetailComponent {

    public unicorn;
    public id;

    constructor(private unicornsService: UnicornsService,
                private route: ActivatedRoute,
                private router: Router) {
        this.route.params.subscribe((params: Params) => {
            this.id = params.id;
            this.unicorn = this.unicornsService.get(params.id);
        });
    }

    public gotoList(): void {
        this.router.navigate(['']);
    }
}
