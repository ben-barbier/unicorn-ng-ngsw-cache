import {Component} from '@angular/core';
import {Unicorn} from '../../shared/models/unicorn.model';
import {UnicornsService} from '../../shared/services/unicorns.service';

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.css']
})
export class ListComponent {

    public unicorns: Unicorn[];

    constructor(private unicornsService: UnicornsService) {
        this.unicornsService.getAll().subscribe(unicorns => this.unicorns = unicorns);
    }

    public removeUnicornFromList(unicornToDelete: Unicorn) {
        this.unicorns = this.unicorns.filter(unicorn => unicorn.id !== unicornToDelete.id);
    }
}
