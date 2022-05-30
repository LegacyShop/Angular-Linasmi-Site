import { Directive, ElementRef, HostListener, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common'; 
@Directive({
  selector: '[appNext]'
})
export class NextDirective {

  constructor(@Inject(DOCUMENT) document: Document, private el: ElementRef) { 

  }

  @HostListener('click')
  nextFunc() {
    var elm = document.querySelectorAll('.sectionOne')[0];
    var items = elm.querySelectorAll('.product');

    elm.append(items[0]);
  }
}
