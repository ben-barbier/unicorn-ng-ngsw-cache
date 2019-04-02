import {Component, forwardRef, HostBinding, Input} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

/**
 * A ControlValueAccessor acts as a bridge between the Angular forms API and a native element in the DOM.
 *
 */
@Component({
    selector: 'app-birthyear',
    templateUrl: './birthyear.component.html',
    styleUrls: ['./birthyear.component.css'],
    providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => BirthyearComponent),
        multi: true
    }]
})
export class BirthyearComponent implements ControlValueAccessor {

    public value: number;

    @Input()
    public disabled = false;

    @HostBinding('style.opacity')
    get opacity() {
        return this.disabled ? 0.25 : 1;
    }

    // Function to call when the birthyear changes.
    private onChange: (birthyear: number) => void;

    // Function to call when the input is touched (when a increment/decrement is clicked).
    private onTouched: () => void;

    public increment() {
        if (!this.disabled) {
            this.writeValue(this.value + 1);
        }
    }

    public decrement() {
        if (!this.disabled) {
            this.writeValue(this.value - 1);
        }
    }

    // Allows Angular to update the model (birthyear).
    // Update the model and changes needed for the view here.
    writeValue(birthyear: number): void {
        if (birthyear !== null) {
            this.value = birthyear;
            this.onTouched();
            this.onChange(this.value);
        }
    }

    // Allows Angular to register a function to call when the model (birthyear) changes.
    // Save the function as a property to call later here.
    registerOnChange(fn: (birthyear: number) => void): void {
        this.onChange = fn;
    }

    // Allows Angular to register a function to call when the input has been touched.
    // Save the function as a property to call later here.
    registerOnTouched(fn: () => void): void {
        this.onTouched = fn;
    }

    // Allows Angular to disable the input.
    setDisabledState(isDisabled: boolean): void {
        this.disabled = isDisabled;
    }

}
