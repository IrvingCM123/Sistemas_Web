import { Component, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-practica2',
  templateUrl: './practica2.component.html',
  styleUrls: ['./practica2.component.css']
})
export class Practica2Component {

  constructor(private renderer: Renderer2, private el: ElementRef) {}

  scrollToElement(targetId: string): void {
    const targetElement = this.el.nativeElement.querySelector(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
    }
  }

}
