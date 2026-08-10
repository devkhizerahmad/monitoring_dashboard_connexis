import { Pipe, PipeTransform } from '@angular/core';

/**
 * kVA pipe — stub. Formats a value with a " kVA" suffix.
 */
@Pipe({
  name: 'kva',
  standalone: true,
})
export class KvaPipe implements PipeTransform {
  transform(value: string | number | null | undefined): string {
    return value == null ? '' : `${value} kVA`;
  }
}