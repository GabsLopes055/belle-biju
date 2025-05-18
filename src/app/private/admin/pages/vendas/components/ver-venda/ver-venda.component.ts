import { Component, Input, OnInit } from '@angular/core';
import { SidebarComponent } from '../../../../../../shared/sidebar/sidebar.component';
import { VendasComponent } from '../../vendas.component';
import { ButtonComponent } from '../../../../../../shared/button/button.component';
import { InputIconComponent } from '../../../../../../shared/input-icon/input-icon.component';
import {
  OptionSelect,
  SelectComponent,
} from '../../../../../../shared/select/select.component';
import { SidebarService } from '../../../../../../shared/sidebar/sidebar.service';
import { vendasResponse } from '../../../../../../models/vendas.interface';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { VendasService } from '../../vendas.service';
import { ToastService } from '../../../../../../shared/toast/toast.service';
import { LoaderComponent } from "../../../../../../shared/loader/loader.component";

@Component({
  selector: 'app-ver-venda',
  standalone: true,
  imports: [
    SidebarComponent,
    VendasComponent,
    ButtonComponent,
    InputIconComponent,
    SelectComponent,
    LoaderComponent
],
  templateUrl: './ver-venda.component.html',
  styleUrl: './ver-venda.component.scss',
})
export class VerVendaComponent implements OnInit {
  @Input() data: any;

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
  valueChange!: OptionSelect;

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

  ngOnInit(): void {
    this.form.controls.formaPagamento.setValue(this.data.data.formaPagamento);
    this.form.controls.nomeProduto.setValue(this.data.data.nomeProduto);
    this.form.controls.preco.setValue(this.data.data.preco);
    this.form.controls.quantidade.setValue(this.data.data.quantidade);
    this.form.controls.total.setValue(this.data.data.total);
    this.valueChange = {
      label: this.data.data.formaPagamento,
      value: this.data.data.formaPagamento,
    };



  }

  changeValue($event: any) {
    this.form.controls.formaPagamento.setValue($event)
  }

  fechar() {
    this.sidebarService.closeSide(false);
  }

  editar() {
    if(this.form.valid) {
      this.loader = true;
      this.vendaService
      .editarVenda(this.form.value, this.data.data.id)
      .subscribe({
        next: (venda) => {
          this.toast.notify({message: 'Venda Editada Com Sucesso !', type: 'SUCCESS'})
          this.sidebarService.closeSide(true);
        },
        error: () => {
          this.loader = true;
          this.toast.notify({message: 'Erro ao Editar Venda', type: 'ERROR'})
        }
      });
    } else {
      this.toast.notify({message: 'Preencha o formulário corretamente !', type: 'WARNING'})
    }

  }
}
