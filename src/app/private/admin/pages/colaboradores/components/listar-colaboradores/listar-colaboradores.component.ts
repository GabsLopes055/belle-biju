import { ColaboradoresService } from './../../colaboradores.service';
import { Component } from '@angular/core';
import { professores } from '../../../../../../models/professores.interface';
import { ButtonComponent } from "../../../../../../shared/button/button.component";
import { InputIconComponent } from "../../../../../../shared/input-icon/input-icon.component";
import { ListComponent } from "../../../../../../shared/list/list.component";
import { HeaderListComponent } from "../../../../../../shared/list/components/header-list/header-list.component";
import { HeaderColComponent } from "../../../../../../shared/list/components/header-col/header-col.component";
import { ItemListComponent } from "../../../../../../shared/list/components/item-list/item-list.component";
import { ItemDataComponent } from "../../../../../../shared/list/components/item-data/item-data.component";
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalService } from '../../../../../../shared/modal/modal.service';
import { VerColaboradorComponent } from '../ver-colaborador/ver-colaborador.component';

@Component({
  selector: 'listar-colaboradores',
  standalone: true,
  imports: [ButtonComponent, InputIconComponent, ListComponent, HeaderListComponent, HeaderColComponent, ItemListComponent, ItemDataComponent],
  templateUrl: './listar-colaboradores.component.html',
  styleUrl: './listar-colaboradores.component.scss'
})
export class ListarColaboradoresComponent {

  professores: professores[] = [
    {
      nome: 'Maria Silva',
      email: 'mariasilva@ayrtonsenna.gov',
      materia: 'Português',
      perfil: 'Professor(a)'
    },
    {
      nome: 'João Santos',
      email: 'joaosantos@ayrtonsenna.gov',
      materia: 'Matemática',
      perfil: 'Professor(a)'
    },
    {
      nome: 'Ana Oliveira',
      email: 'anaoliveira@ayrtonsenna.gov',
      materia: 'História',
      perfil: 'Professor(a)'
    },
    {
      nome: 'Maria Silva',
      email: 'mariasilva@ayrtonsenna.gov',
      materia: 'Português',
      perfil: 'Professor(a)'
    },
    {
      nome: 'João Santos',
      email: 'joaosantos@ayrtonsenna.gov',
      materia: 'Matemática',
      perfil: 'Professor(a)'
    },
    {
      nome: 'Ana Oliveira',
      email: 'anaoliveira@ayrtonsenna.gov',
      materia: 'História',
      perfil: 'Professor(a)'
    },
  ];

  form = new FormGroup({
    buscar: new FormControl('', Validators.required),
  });

  constructor(
    private readonly colaboradoresService : ColaboradoresService,
    private readonly modalService: ModalService
  ) {}

  cadastrarColaborador() {
    this.colaboradoresService.steps.next('cadastrar-colaborador');
  }

  verColaborador() {
    this.colaboradoresService.steps.next('ver-colaborador');
  }

}
