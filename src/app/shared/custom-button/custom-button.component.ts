import {Component, input} from '@angular/core';

@Component({
  selector: 'app-custom-button',
  standalone: true,
  imports: [],
  templateUrl: './custom-button.component.html',
  styleUrl: './custom-button.component.css'
})
export class CustomButtonComponent {
  text = input.required<string>();
  symbol = input.required<string>();

}
