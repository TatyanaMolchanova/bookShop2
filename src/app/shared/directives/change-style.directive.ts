import {Directive, ElementRef, HostListener, Input, Renderer2} from '@angular/core';

@Directive({
  selector: '[appChangeStyle]'
})
export class ChangeStyleDirective {

  constructor(private elem: ElementRef,
              private renderer: Renderer2) {
  }

  @Input('appChangeStyle') defaultColor: string;

  @HostListener('click') onClick() {
    this.elem.nativeElement.style.fontSize = '22px';
    this.elem.nativeElement.style.border = '1px solid red';
    this.renderer.setStyle(this.elem.nativeElement, 'background-color', 'green');
    this.elem.nativeElement.style.color = this.defaultColor;
  }
}
