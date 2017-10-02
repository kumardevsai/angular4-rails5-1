import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appScrollToEnd]'
})
export class ScrollToEndDirective {

  constructor(private element: ElementRef) { }
  
  @HostListener('scroll') onScroll(){
    console.log(this.element)  
  }
}
