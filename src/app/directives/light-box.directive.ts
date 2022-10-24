import { Directive, ElementRef, HostListener, Input, OnChanges } from '@angular/core';

@Directive({
  selector: '[LightBox]'
})
export class LightBoxDirective implements OnChanges {

  @Input() defaultColor: string = 'darkblue';

  //@Input() highlightColor: string = this.defaultColor;
  @Input('LightBox') highlightColor: string = this.defaultColor;


  constructor(private eleRef: ElementRef) {
    //this.eleRef.nativeElement.style.border = `2px solid ${this.defaultColor}`;
  }

  ngOnChanges(): void{
    this.eleRef.nativeElement.style.border = `2px solid ${this.defaultColor}`;
  }


  @HostListener('mouseover') onMouseOver() {
    this.eleRef.nativeElement.style.border = `4px solid ${this.highlightColor}`;
  }

  @HostListener('mouseout') onMouseOut() {
    this.eleRef.nativeElement.style.border = `2px solid ${this.defaultColor}`;
  }


}
