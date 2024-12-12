import { NgClass } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'tgt-stepper',
  standalone: true,
  imports: [NgClass],
  templateUrl: './stepper.component.html',
  styleUrl: './stepper.component.scss'
})
export class StepperComponent {
  @Input() steps: steps[] = [];
  @Output() emitStep: EventEmitter<steps> = new EventEmitter();

}

export interface steps {
  label: string,
  value: any,
  active: boolean
}
