import {Directive} from '@angular/core';
import {AbstractControl, NG_VALIDATORS, ValidationErrors, Validator} from '@angular/forms';

@Directive({
    selector: '[appPair]',
    providers: [{provide: NG_VALIDATORS, useExisting: PairValidatorDirective, multi: true}]
})
export class PairValidatorDirective implements Validator {

    constructor() {
    }

    validate(control: AbstractControl): ValidationErrors | null {

        if (control.value % 2) {
            return {'isPair': true};
        }
        return null;

    }

}
