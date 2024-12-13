import {Component, Input, input, OnInit} from '@angular/core';
import {ButtonComponent} from "../../button/button.component";
import {DividerComponent} from "../../divider/divider.component";
import {InputIconComponent} from "../../input-icon/input-icon.component";
import {ModalComponent} from "../../modal/modal.component";
import {OptionSelect, SelectComponent} from "../../select/select.component";
import {ModalService} from "../../modal/modal.service";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-new-event',
  standalone: true,
    imports: [
        ButtonComponent,
        DividerComponent,
        InputIconComponent,
        ModalComponent,
        SelectComponent
    ],
  templateUrl: './new-event.component.html',
  styleUrl: './new-event.component.scss'
})
export class NewEventComponent implements OnInit {

  @Input() data:{title:string }| undefined;

  title = new FormControl();
  horaInicio = new FormControl();
  horaFim = new FormControl();

  options: OptionSelect[] = [
    {label: 'Vermelho', value: 'red'},
    {label: 'Laranja', value: 'orange'},
  ];

  constructor(
    private readonly modal: ModalService
  ) {}

  ngOnInit(): void {
        if(this.data?.title) {
          this.parseSchedule(this.data?.title);
        }
  }

  close() {
    this.modal.close();
  }

  parseSchedule(input: string): void {
    const [texto, horario] = input.split('|').map(part => part.trim());
    const match = /(?<horaInicio>\d{2}:\d{2})\s+\u00e0s\s+(?<horaFim>\d{2}:\d{2})/.exec(horario);

    if (!match || !match.groups) {
      throw new Error("Formato inválido. Certifique-se de que segue o padrão 'Texto | HH:mm às HH:mm'");
    }

    const { horaInicio, horaFim } = match.groups;

    this.title.setValue(texto)
    this.horaInicio.setValue(horaInicio);
    this.horaFim.setValue(horaFim);

  }
}
