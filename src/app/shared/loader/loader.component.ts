import { Component, Input } from '@angular/core';

@Component({
  selector: 'tgt-loader',
  standalone: true,
  imports: [],
  templateUrl: './loader.component.html',
  styleUrl: './loader.component.scss'
})
export class LoaderComponent {
  @Input() size: 'small' | 'middle' | 'large' = 'middle';
}
