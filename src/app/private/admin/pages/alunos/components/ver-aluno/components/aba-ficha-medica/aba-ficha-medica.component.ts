import { Component } from '@angular/core';
import { ButtonComponent } from "../../../../../../../../shared/button/button.component";
import { InputIconComponent } from "../../../../../../../../shared/input-icon/input-icon.component";
import { CheckboxComponent } from "../../../../../../../../shared/checkbox/checkbox.component";

@Component({
  selector: 'aba-ficha-medica',
  standalone: true,
  imports: [ButtonComponent, InputIconComponent, CheckboxComponent],
  templateUrl: './aba-ficha-medica.component.html',
  styleUrl: './aba-ficha-medica.component.scss'
})
export class AbaFichaMedicaComponent {

  editar: boolean = false;

  editarForm() {
    this.editar = !this.editar;
  }
}
