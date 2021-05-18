import { Directive, Renderer2, ElementRef, OnInit, HostListener } from '@angular/core';
/*
this is a custome Attribute directives...
*/
@Directive({
  selector: '[appBetterHightlight]'
})
export class BetterHightlightDirective implements OnInit {

  constructor(private elem: ElementRef, private render: Renderer2) { }
  ngOnInit(): void {
    this.render.setStyle(this.elem.nativeElement, 'background-color', 'green');
  }

  @HostListener('mouseenter') mouseOver(eventData: Event) {
    this.render.setStyle(this.elem.nativeElement, 'background-color', 'red');
  }
  @HostListener('mouseleave') mouseLeave(eventData: Event) {
    this.render.setStyle(this.elem.nativeElement, 'background-color', 'yellow');
  }
}
