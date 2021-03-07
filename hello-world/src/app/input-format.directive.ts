import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[inputFormat]'
})
export class InputFormatDirective {
	@Input('inputFormat') format : string;

	constructor(private el: ElementRef) { }

	@HostListener('blur') onBlur() {
		let value : string = this.el.nativeElement.value;

		if(this.format == 'lowercase')
			this.el.nativeElement.value = value.toLowerCase();
		else
			this.el.nativeElement.value = value.toUpperCase();
	}
}