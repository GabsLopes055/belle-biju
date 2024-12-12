import {Component, input} from '@angular/core';

@Component({
  selector: 'tgt-list',
  standalone: true,
  imports: [],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {

  overflow = input(true);
}
