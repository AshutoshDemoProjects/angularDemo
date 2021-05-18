import { Directive, ElementRef, OnInit } from '@angular/core';
/*
this is a custome Attribute directives...
*/
@Directive({
  selector: '[appBasicHightlight]'
})
export class BasicHightlightDirective implements OnInit {

  constructor(private elem: ElementRef) { }
  ngOnInit(): void {
    this.elem.nativeElement.style.backgroundColor = 'green';
  }

}
