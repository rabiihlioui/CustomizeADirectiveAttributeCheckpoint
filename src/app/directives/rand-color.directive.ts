import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appRandColor]'
})
export class RandColorDirective {

  coloredText: string

  @HostBinding('style.color') col = 'red'
  @HostBinding('style.borderColor') bc = 'blue'

  constructor() { }

  @HostListener('window:keyup') changeColorOnnKeyUp() {
    const colForBoth = this.randomColor()
    this.col = this.bc = colForBoth
  }

  randomColor() {
    return '#' + ('00000' + (Math.random() * 16777216 << 0).toString(16)).substr(-6);
  }

}
