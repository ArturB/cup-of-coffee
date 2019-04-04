import { Directive, OnInit, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective implements OnInit {

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void { }

  @HostListener('mouseenter')
  mouseenter(event: Event) {
    this.renderer.addClass(this.el.nativeElement, 'drop');
  }
  @HostListener('mouseleave')
  mouseleave(event: Event) {
    this.renderer.removeClass(this.el.nativeElement, 'drop');
  }

}
