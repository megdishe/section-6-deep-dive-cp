import {Component} from '@angular/core';
import {CustomButtonComponent} from "../shared/custom-button/custom-button.component";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CustomButtonComponent, CustomButtonComponent
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
