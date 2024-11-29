import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalService } from '../../../../../../../../../shared/modal/modal.service';
import { ButtonComponent } from "../../../../../../../../../shared/button/button.component";
import { InputIconComponent } from "../../../../../../../../../shared/input-icon/input-icon.component";
import { ListComponent } from "../../../../../../../../../shared/list/list.component";
import { HeaderListComponent } from "../../../../../../../../../shared/list/components/header-list/header-list.component";
import { HeaderColComponent } from "../../../../../../../../../shared/list/components/header-col/header-col.component";
import { ItemListComponent } from "../../../../../../../../../shared/list/components/item-list/item-list.component";
import { ItemDataComponent } from "../../../../../../../../../shared/list/components/item-data/item-data.component";
import { VerCertificacaoColaboradorComponent } from '../ver-certificacao-colaborador/ver-certificacao-colaborador.component';
import { CadastrarCertificacaoColaboradorComponent } from '../cadastrar-certificacao-colaborador/cadastrar-certificacao-colaborador.component';

@Component({
  selector: 'listar-certificacoes-colaborador',
  standalone: true,
  imports: [ButtonComponent, InputIconComponent, ListComponent, HeaderListComponent, HeaderColComponent, ItemListComponent, ItemDataComponent],
  templateUrl: './listar-certificacoes-colaborador.component.html',
  styleUrl: './listar-certificacoes-colaborador.component.scss'
})
export class ListarCertificacoesColaboradorComponent {


  form = new FormGroup({
    buscarTurma: new FormControl('', Validators.required),
  });

  constructor(
    private readonly modalService: ModalService
  ){}


  verCertificacao() {
    this.modalService.open(VerCertificacaoColaboradorComponent);
  }

  cadastrarCertificacao() {
    this.modalService.open(CadastrarCertificacaoColaboradorComponent);

  }
}
