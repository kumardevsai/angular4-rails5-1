import { Directive, HostListener, ElementRef, Output, EventEmitter} from '@angular/core';

@Directive({
  selector: '[app-scroll-to-end]'
})
export class ScrollToEndDirective {
  @Output('app-scroll-to-end') appScrollToEnd = new EventEmitter();

  constructor(private element: ElementRef) { 
    console.log(element)
  }
  
  @HostListener('scroll') onScroll(){
    var positionScroll = this.element.nativeElement.scrollHeight - this.element.nativeElement.scrollTop;
    if(positionScroll === this.element.nativeElement.clientHeight) {
      console.log(this.appScrollToEnd);
      this.appScrollToEnd.emit();
    }
  }
}
