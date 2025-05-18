
import { NgModule, inject } from "@angular/core";
import { CanActivateFn, RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./pages/home/home.component";
import { TokenService } from "../../shared/services/token/token.service";


const tokenGuard: CanActivateFn = () => {
  const guardService = inject(TokenService);
  return guardService.isLogin()
}

const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [tokenGuard]},
  { path: 'vendas', loadComponent: () => import('./pages/vendas/vendas.component').then((c) => c.VendasComponent), canActivate: [tokenGuard]},
  { path: 'usuarios', loadComponent: () => import('./pages/usuarios/usuarios.component').then((c) => c.UsuariosComponent), canActivate: [tokenGuard]},
  { path: 'produtos', loadComponent: () => import('./pages/produtos/produtos.component').then((c) => c.ProdutosComponent), canActivate: [tokenGuard]},
  // { path: 'escola', loadComponent: () => import('./pages/escola/escola.component').then((c) => c.EscolaComponent), canActivate: [tokenGuard]},
  // { path: 'turmas', loadComponent: () => import('./pages/turmas/turmas.component').then((c) => c.TurmasComponent), canActivate: [tokenGuard]},
  // { path: 'colaboradores', loadComponent: () => import('./pages/colaboradores/colaboradores.component').then((c) => c.ColaboradoresComponent), canActivate: [tokenGuard]},
  // { path: 'alunos', loadComponent: () => import('./pages/alunos/alunos.component').then((c) => c.AlunosComponent), canActivate: [tokenGuard]},
  // { path: 'central', loadComponent: () => import('./pages/central/central.component').then((c) => c.CentralComponent), canActivate: [tokenGuard]},
  // { path: 'perfil', loadComponent: () => import('./pages/perfil/perfil.component').then((c) => c.PerfilUsuarioComponent), canActivate: [tokenGuard]},
  // { path: 'agenda', loadComponent: () => import('./pages/agenda/agenda/agenda.component').then((c) => c.AgendaComponent), canActivate: [tokenGuard]},
  // { path: 'pesquisas', loadComponent: () => import('./pages/pesquisas/pesquisa/pesquisa.component').then((c) => c.PesquisaComponent), canActivate: [tokenGuard]},
];


  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class AdminRoutingModule { }
