import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalService } from '../../../../../../../../../shared/modal/modal.service';
import { ButtonComponent } from "../../../../../../../../../shared/button/button.component";
import { ListComponent } from "../../../../../../../../../shared/list/list.component";
import { InputIconComponent } from "../../../../../../../../../shared/input-icon/input-icon.component";
import { HeaderListComponent } from "../../../../../../../../../shared/list/components/header-list/header-list.component";
import { HeaderColComponent } from "../../../../../../../../../shared/list/components/header-col/header-col.component";
import { ItemListComponent } from "../../../../../../../../../shared/list/components/item-list/item-list.component";
import { ItemDataComponent } from "../../../../../../../../../shared/list/components/item-data/item-data.component";
import { VerConteudoComponent } from '../ver-conteudo/ver-conteudo.component';
import { AdicionarConteudoComponent } from '../adicionar-conteudo/adicionar-conteudo.component';

@Component({
  selector: 'turmas-conteudos',
  standalone: true,
  imports: [ButtonComponent, ListComponent, InputIconComponent, HeaderListComponent, HeaderColComponent, ItemListComponent, ItemDataComponent],
  templateUrl: './turmas-conteudos.component.html',
  styleUrl: './turmas-conteudos.component.scss',
})
export class TurmasConteudosComponent {
  form = new FormGroup({
    buscarTurma: new FormControl('', Validators.required),
  });

  constructor(private readonly modalService: ModalService) {}

  verConteudo() {
    this.modalService.open(VerConteudoComponent)
  }

  editarConteudo() {}

  adicionarConteudo() {
    this.modalService.open(AdicionarConteudoComponent);
  }
}
