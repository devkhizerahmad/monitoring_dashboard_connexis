import { ChangeDetectionStrategy, Component, forwardRef, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';
import type { ControlValueAccessor } from '@angular/forms';

/**
 * Styled native <select>. Implements ControlValueAccessor so it works with
 * ngModel/two-way binding. Options + big flag come in via @Input.
 */
@Component({
  selector: 'app-select',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { style: 'display:contents' },
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectComponent),
      multi: true,
    },
  ],
})
export class SelectComponent implements ControlValueAccessor {
  readonly options = input<string[]>([]);
  readonly big = input(false);

  innerValue = '';
  isDisabled = false;

  private onChange: (value: unknown) => void = () => void 0;
  private onTouched: () => void = () => void 0;

  writeValue(value: unknown): void {
    this.innerValue = value == null ? '' : String(value);
  }

  registerOnChange(fn: (value: unknown) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }

  onSelect(value: string): void {
    this.innerValue = value;
    this.onChange(value);
    this.onTouched();
  }
}
