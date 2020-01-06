import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appFinished]'
})
export class FinishedDirective {

  @Input("appFinished") status: boolean;

  /**
  * Represent a filter for DataProject
  * @constructor
  * @param (ElementRef) argumment for effect DOM
  * @returns (void)
  */
  constructor(private el: ElementRef) {
    console.log('>>>', 'Directiva Finished calling');
    this.el.nativeElement.style.color = this.status ? 'red': 'green';
   
  }

}
