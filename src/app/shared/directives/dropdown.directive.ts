import { Directive, OnInit, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective implements OnInit {

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {
    
  }

  @HostListener('mouseenter')
  mouseenter(event: Event) {
    // console.log(this.el.nativeElement)
    this.renderer.addClass(this.el.nativeElement, 'drop');
    
    // this.renderer.setStyle(li, 'display', 'block');
  }
  @HostListener('mouseleave')
  mouseleave(event: Event) {
    // console.log("leave");
    // let li = this.el.nativeElement;
    this.renderer.removeClass(this.el.nativeElement, 'drop');
  }
    
  
}
