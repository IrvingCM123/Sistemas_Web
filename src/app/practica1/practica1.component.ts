import { Component, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-practica1',
  templateUrl: './practica1.component.html',
  styleUrls: ['./practica1.component.css']
})
export class Practica1Component {

  constructor(private renderer: Renderer2, private el: ElementRef) {}

  scrollToElement(targetId: string): void {
    const targetElement = this.el.nativeElement.querySelector(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
    }
  }

}
