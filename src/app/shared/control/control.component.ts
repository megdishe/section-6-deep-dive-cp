import {Component, ElementRef, HostBinding, HostListener, inject, input, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'control',
    '(click)': 'onClick()'
  }
})

export class ControlComponent {
  label = input<String>();
  private hostElement = inject(ElementRef);

  onClick() {
    console.log(this.hostElement);
  }

  // legacy alternatives to host block
  // @HostBinding('class') className = 'control';
  // @HostListener('click') onClick() {
  // console.log(this.hostElement);
  // }
}
