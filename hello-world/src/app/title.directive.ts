import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[title]'
})
export class TitleDirective {

	@Input('title') title : string;
  constructor(private el: ElementRef) { }

  @HostListener('load') onLoad() {
	  let value : string = this.el.nativeElement.value;

	  
  }
}
