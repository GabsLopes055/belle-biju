import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalService } from '../../../../../../shared/modal/modal.service';
import { EditarPesquisaComponent } from '../editar-pesquisa/editar-pesquisa.component';
import { ModalComponent } from '../../../../../../shared/modal/modal.component';
import { DividerComponent } from '../../../../../../shared/divider/divider.component';
import { InputIconComponent } from '../../../../../../shared/input-icon/input-icon.component';
import { CheckboxComponent } from '../../../../../../shared/checkbox/checkbox.component';
import { ToggleComponent } from '../../../../../../shared/toggle/toggle.component';
import { TextareaComponent } from '../../../../../../shared/textarea/textarea.component';
import { ButtonComponent } from '../../../../../../shared/button/button.component';

@Component({
  selector: 'app-criar-pesquisa',
  standalone: true,
  imports: [
    ModalComponent,
    DividerComponent,
    InputIconComponent,
    CheckboxComponent,
    ToggleComponent,
    TextareaComponent,
    ButtonComponent,
  ],
  templateUrl: './criar-pesquisa.component.html',
  styleUrl: './criar-pesquisa.component.scss',
})
export class CriarPesquisaComponent {
  form = new FormGroup({
    assunto: new FormControl('', Validators.required),
    perguntaPrincipal: new FormControl('', Validators.required),
    tipo: new FormControl('', Validators.required),
  });

  constructor(private readonly modalService: ModalService) {}

  agendar() {
    this.modalService.close(EditarPesquisaComponent);
  }
}
