import { Directive, Input, HostListener, HostBinding } from '@angular/core';
import { collectExternalReferences } from '@angular/compiler';

@Directive({
  selector: '[appChosenColor]'
})
export class ChosenColorDirective {

  @Input() colorIn: string
  @Input() colorOut: string

  @HostBinding('style.color') col: string

  constructor() { }

  @HostListener('mouseenter') mouseOn(){
    this.col = this.colorIn
  }

  @HostListener('mouseleave') mouseOut(){
    this.col = this.colorOut
  }

}
