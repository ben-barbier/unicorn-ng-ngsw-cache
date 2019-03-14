import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Unicorn} from '../../models/unicorn.model';
import {UnicornsService} from '../../services/unicorns.service';

@Component({
    selector: 'app-edit-unicorn',
    templateUrl: './edit-unicorn.component.html',
    styleUrls: ['./edit-unicorn.component.css']
})
export class EditUnicornComponent {

    constructor(private dialogRef: MatDialogRef<EditUnicornComponent>,
                private unicornsService: UnicornsService,
                @Inject(MAT_DIALOG_DATA) public unicorn: Unicorn) {
    }

    public saveUnicorn(unicorn: Unicorn): void {
        this.unicornsService.save(unicorn).subscribe(() => {
            this.dialogRef.close(unicorn);
        });

    }
}
