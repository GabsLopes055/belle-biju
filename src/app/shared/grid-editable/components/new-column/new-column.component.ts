import { Component } from '@angular/core';
import {ModalComponent} from "../../../modal/modal.component";
import {DividerComponent} from "../../../divider/divider.component";
import {InputIconComponent} from "../../../input-icon/input-icon.component";
import {TextareaComponent} from "../../../textarea/textarea.component";
import {ButtonComponent} from "../../../button/button.component";
import {OptionSelect, SelectComponent} from "../../../select/select.component";

@Component({
  selector: 'app-new-column',
  standalone: true,
  imports: [
    ModalComponent,
    DividerComponent,
    InputIconComponent,
    TextareaComponent,
    ButtonComponent,
    SelectComponent
  ],
  templateUrl: './new-column.component.html',
  styleUrl: './new-column.component.scss'
})
export class NewColumnComponent {

  options: OptionSelect[] = [
    {label: "Combo de opções para selecionar", value: 'select'},
    {label: "Texto", value: 'text'},
    {label: "Data", value: 'date'},
  ]
}
