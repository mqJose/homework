import { Directive, ElementRef, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[appPaint]'
})
export class PaintDirective {
  @Input("appPaint") newColor: string;

  constructor(private el: ElementRef) { }

  /**
  * Represent a filter for DataProject
  * @param (event mouseenter) argumment of Input Date
  * @returns (void) 
  */
  @HostListener('mouseenter') mouseIn(){
    this.paintContent( this.newColor || 'gray');
  }

  /**
  * Represent a filter for DataProject
  * @param (event mouseleave)
  * @returns (void)
  */
  @HostListener('mouseleave') mouseOut() {
    this.paintContent( null);
  }
  
  /**
  * Represent a filter for DataProject
  * @param (string) argumment of color
  * @returns (void)
  */
  private paintContent(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
