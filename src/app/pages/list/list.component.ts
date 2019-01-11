import {Component} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.css']
})
export class ListComponent {

    public unicorns = this.http.get('/rs/unicorns');

    constructor(private http: HttpClient) {
    }

}
