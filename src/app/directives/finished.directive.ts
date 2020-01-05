import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appFinished]'
})
export class FinishedDirective {

  @Input("appFinished") status: string;

  constructor(private el: ElementRef) {
    console.log('>>>', 'Directiva Finished calling');
    this.statusContent();
  }

  private statusContent() {
    console.log('>>>', this.status);
    this.el.nativeElement.style.backgroundColor = this.status != 'Finished' ? 'red': null;
  }

}
