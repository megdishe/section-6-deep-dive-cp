import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-dashboard-item',
  standalone: true,
  imports: [],
  templateUrl: './dashboard-item.component.html',
  styleUrl: './dashboard-item.component.css',
  // host:{
  //   class: 'dashboard-item'
  // }
})
export class DashboardItemComponent {
  @Input() imageSrc?: string;
  @Input() imageAlt?: string;
  @Input() title?: string;

}
