import {Component} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
    selector: 'app-detail',
    templateUrl: './detail.component.html',
    styleUrls: ['./detail.component.css']
})
export class DetailComponent {

    public unicorn;
    public id;

    constructor(private http: HttpClient,
                private route: ActivatedRoute) {
        this.route.params.subscribe((params: Params) => {
            this.id = params.id;
            this.unicorn = this.http.get(`/rs/unicorns/${params.id}`);
        });
    }

}
