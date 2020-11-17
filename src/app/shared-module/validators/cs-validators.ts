import { AbstractControl } from '@angular/forms';

export class CsValidators {
  static power(control: AbstractControl): any {
    const minPower = 50;
    const maxPower = 800;
    if (control.value < minPower || control.value > maxPower) {
      return {
        power: true
      };
    }
    return null;
  }
}
