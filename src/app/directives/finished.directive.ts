import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appFinished]'
})
export class FinishedDirective {

  @Input("appFinished") status: boolean;

  constructor(private el: ElementRef) {
    console.log('>>>', 'Directiva Finished calling');
    this.el.nativeElement.style.color = this.status? 'red': 'green';
   
  }

}
