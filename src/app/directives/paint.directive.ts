import { Directive, ElementRef, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[appPaint]'
})
export class PaintDirective {
  @Input("appPaint") newColor: string;

  constructor(private el: ElementRef) { }

  @HostListener('mouseenter') mouseIn(){
    this.paintContent( this.newColor || 'gray');
  }

  @HostListener('mouseleave') mouseOut() {
    this.paintContent( null);
  }

  private paintContent(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
