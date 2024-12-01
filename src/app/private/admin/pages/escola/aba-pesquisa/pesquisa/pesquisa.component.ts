import { Component } from '@angular/core';
import { CriarPesquisaComponent } from '../criar-pesquisa/criar-pesquisa.component';
import { VerPesquisaComponent } from '../ver-pesquisa/ver-pesquisa.component';
import { ModalService } from '../../../../../../shared/modal/modal.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ButtonComponent } from "../../../../../../shared/button/button.component";
import { InputIconComponent } from "../../../../../../shared/input-icon/input-icon.component";
import { ListComponent } from "../../../../../../shared/list/list.component";
import { HeaderListComponent } from "../../../../../../shared/list/components/header-list/header-list.component";
import { HeaderColComponent } from "../../../../../../shared/list/components/header-col/header-col.component";
import { ItemListComponent } from "../../../../../../shared/list/components/item-list/item-list.component";
import { ItemDataComponent } from "../../../../../../shared/list/components/item-data/item-data.component";
import { Status, StatusCircleComponent } from "../../../../../../shared/status-circle/status-circle.component";

@Component({
  selector: 'pesquisa-escola',
  standalone: true,
  imports: [ButtonComponent, InputIconComponent, ListComponent, HeaderListComponent, HeaderColComponent, ItemListComponent, ItemDataComponent, StatusCircleComponent],
  templateUrl: './pesquisa.component.html',
  styleUrl: './pesquisa.component.scss'
})
export class PesquisaComponent {

  status: Status = Status.PENDENTE;

  form = new FormGroup({
    buscarTurma: new FormControl('', Validators.required),
  });

  constructor(
    private readonly modalService: ModalService
  ){}

  criarEvento() {
    this.modalService.open(CriarPesquisaComponent)
  }

  verEvento() {
    this.modalService.open(VerPesquisaComponent)
  }
}
