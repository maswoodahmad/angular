import { Directive ,ElementRef} from '@angular/core';

@Directive({
  selector: '[appCopyright]'
})
export class CopyrightDirective {

  constructor(el : ElementRef) { 
    const currentDate = new Date().getFullYear();
    const targetEl : HTMLElement= el.nativeElement;
    targetEl.classList.add('copyright')
    targetEl.textContent = `Copyright ©${currentDate} All rights reserved`

  }

}
