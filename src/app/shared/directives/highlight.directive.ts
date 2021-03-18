import {Directive, ElementRef, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private elem: ElementRef) {
    // elem.nativeElement.style.backgroundColor = 'yellow';
  }

  @HostBinding('style.border') border: string;

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('pink');
    this.border = '1px dashed green';
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
    this.border = 'none';
  }

  private highlight(color: string): void {
    this.elem.nativeElement.style.backgroundColor = color;
  }
}
