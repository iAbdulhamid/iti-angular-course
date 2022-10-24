import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[LightBox]'
})
export class LightBoxDirective {

  @Input() defaultColor: string = 'darkblue';

  //@Input() highlightColor: string = this.defaultColor;
  @Input('LightBox') highlightColor: string = this.defaultColor;


  constructor(private eleRef: ElementRef) {
    eleRef.nativeElement.style.border = `2px solid ${this.defaultColor}`;
  }

  @HostListener('mouseover') onMouseOver() {
    this.eleRef.nativeElement.style.border = `4px solid ${this.highlightColor}`;
  }

  @HostListener('mouseover') onMouseOut() {
    this.eleRef.nativeElement.style.border = `2px solid ${this.defaultColor}`;
  }


}
