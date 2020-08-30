import { Directive, ElementRef } from '@angular/core';
import { componentFactoryName } from '@angular/compiler';

@Directive({
  selector: '[csImportant]'
})
export class ImportantDirective {

  constructor(private el: ElementRef) {
    el.nativeElement.style.fontWeight = 700;
    el.nativeElement.style.color = '#295089';
  }

}
