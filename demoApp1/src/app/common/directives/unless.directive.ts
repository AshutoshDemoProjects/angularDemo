import { Directive, Input, TemplateRef, ViewContainerRef, ViewRef } from '@angular/core';
/*
this is a custome Structural directives...
opposit to ngIf
*/
@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {
  @Input() set unless(condition: boolean) {
    if (!condition) {
      this.vcRef.createEmbeddedView(this.tempRef);
    } else {
      this.vcRef.clear();
    }
  }
  constructor(private tempRef: TemplateRef<any>, private vcRef: ViewContainerRef) { }

}
