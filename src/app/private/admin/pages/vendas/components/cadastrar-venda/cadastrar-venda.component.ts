import { Component } from '@angular/core';
import { SidebarComponent } from '../../../../../../shared/sidebar/sidebar.component';
import { LoaderComponent } from '../../../../../../shared/loader/loader.component';
import { InputIconComponent } from '../../../../../../shared/input-icon/input-icon.component';
import {
  OptionSelect,
  SelectComponent,
} from '../../../../../../shared/select/select.component';
import { ButtonComponent } from '../../../../../../shared/button/button.component';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SidebarService } from '../../../../../../shared/sidebar/sidebar.service';
import { VendasService } from '../../vendas.service';
import { ToastService } from '../../../../../../shared/toast/toast.service';

@Component({
  selector: 'app-cadastrar-venda',
  standalone: true,
  imports: [
    SidebarComponent,
    LoaderComponent,
    InputIconComponent,
    SelectComponent,
    ButtonComponent,
  ],
  templateUrl: './cadastrar-venda.component.html',
  styleUrl: './cadastrar-venda.component.scss',
})
export class CadastrarVendaComponent {
  options: OptionSelect[] = [
    {
      label: 'Dinheiro',
      value: 'DINHEIRO',
    },
    {
      label: 'Pix',
      value: 'PIX',
    },
    {
      label: 'Débito',
      value: 'DEBITO',
    },
    {
      label: 'Crédito',
      value: 'DEBITO',
    },
  ];
  loader: boolean = false;

  form = new FormGroup({
    formaPagamento: new FormControl('', Validators.required),
    nomeProduto: new FormControl('', Validators.required),
    preco: new FormControl('', Validators.required),
    quantidade: new FormControl('', Validators.required),
    total: new FormControl('', Validators.required),
  });

  constructor(
    private readonly sidebarService: SidebarService,
    private readonly vendaService: VendasService,
    private readonly toast: ToastService
  ) {}

  fechar() {
    this.sidebarService.closeSide(false);
  }

  changeValue($event: any) {
    this.form.controls.formaPagamento.setValue($event);
  }

  salvar() {
    if(this.form.valid) {
      this.loader = true;
      this.vendaService
      .salvarVenda(this.form.value)
      .subscribe({
        next: (venda) => {
          this.toast.notify({message: 'Venda Salva Com Sucesso !', type: 'SUCCESS'})
          this.sidebarService.closeSide(true);
        },
        error: () => {
          this.loader = true;
          this.toast.notify({message: 'Erro ao Salvar Venda', type: 'ERROR'})
        }
      });
    } else {
      this.toast.notify({message: 'Preencha o formulário corretamente !', type: 'WARNING'})
    }

  }
}
