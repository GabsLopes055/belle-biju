import { Component } from '@angular/core';
import { FullCalendarModule } from '@fullcalendar/angular';
import { CalendarOptions, EventClickArg } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';

import { ModalService } from '../modal/modal.service';
import { NewEventComponent } from './new-event/new-event.component';
import { CriarEventoComponent } from '../../private/admin/pages/escola/aba-agenda/agenda/components/criar-evento/criar-evento.component';


@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [
    FullCalendarModule
  ],
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.scss',
})
export class CalendarComponent {

  calendarOptions: CalendarOptions = {
    plugins: [dayGridPlugin, interactionPlugin], // Registra o plugin aqui
    initialView: 'dayGridMonth', // Define a view inicial
    dateClick: (args) => this.dayClick(args),
    eventClick: arg => this.editarEvento(arg),
    locale: 'pt-br',
    height: 750,
    events: [
      { title: 'Conferência | 09:00 às 11:30', date: '2024-12-02' },
      { title: 'Reunião Pais | 09:00 às 12:00', date: '2024-12-03'},
      { title: 'Reunião Professores | 15:00 às 16:00', date: '2024-12-03', backgroundColor: 'orange'},
      { title: 'Férias | 08:00 às 18:00', backgroundColor: 'green', start: '2024-12-16', end: '2024-12-20'},
    ],

  };

  constructor(
    private readonly modal: ModalService
  ) {
  }

  dayClick(res: {dateStr: string}) {
    this.modal.open(CriarEventoComponent);
    // this.modal.open(NewEventComponent);
    // alert('voce clicou' + res.dateStr);
  }
  editarEvento(arg: EventClickArg) {
    this.modal.openWithData(NewEventComponent, {title: arg.event._def.title})
    console.log(arg)
  }
  remover() {}
}
