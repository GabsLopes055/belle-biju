import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavbarService } from '../../../../shared/navbar/navbar.service';
import { MenuService } from '../../../../shared/menu/menu.service';
import { AlunosService } from './alunos.service';
import { ListarAlunosComponent } from "./components/listar-alunos/listar-alunos.component";
import { CadastrarAlunoComponent } from "./components/cadastrar-aluno/cadastrar-aluno.component";
import { VerAlunoComponent } from "./components/ver-aluno/ver-aluno.component";
import { EditarAlunoComponent } from "./components/ver-aluno/components/editar-aluno/editar-aluno.component";

@Component({
  selector: 'app-alunos',
  standalone: true,
  imports: [ListarAlunosComponent, CadastrarAlunoComponent, VerAlunoComponent, EditarAlunoComponent],
  templateUrl: './alunos.component.html',
  styleUrl: './alunos.component.scss',
})
export class AlunosComponent implements OnInit, OnDestroy {
  component: string = '';
  constructor(
    private readonly navbarService: NavbarService,
    private readonly menuService: MenuService,
    private readonly alunosService: AlunosService,
  ) {
    navbarService.setTitle('Alunos');
    menuService.setSelected({
      icon: 'school',
      label: 'Alunos',
      route: '/admin/alunos',
      checked: true,
    });
  }

  ngOnInit(): void {
    this.alunosService.steps.subscribe((value) => {
      this.component = value;
    });
  }

  ngOnDestroy(): void {
    this.alunosService.steps.next('listar-alunos');
  }


}
