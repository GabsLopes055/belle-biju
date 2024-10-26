import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { io } from 'socket.io-client';
import {NgForOf, NgIf, NgOptimizedImage} from "@angular/common";

interface Presenca {
  nome: string;
  turma: string;
  fotoUrl: string; // Supondo que o endpoint devolva a URL da foto
  presente: boolean
}

@Component({
  selector: 'reconhecimentos',
  standalone: true,
  imports: [
    NgForOf,
    NgOptimizedImage,
    NgIf
  ],
  templateUrl: './reconhecimentos.component.html',
  styleUrls: ['./reconhecimentos.component.scss']
})
export class ReconhecimentosComponent implements OnInit {
  listaPresenca: Presenca[] = [];
  socket: any;
  serverUrl: string = 'https://escola-ai-backend.technolimit.com.br';

  constructor(private http: HttpClient) {
    this.socket = io(this.serverUrl);
  }

  ngOnInit(): void {
    // Obter lista inicial de presenças ao carregar o componente
    this.atualizarListaPresenca();

    // Escutar o evento do socket para atualizar a lista de presença
    this.socket.on('alunoPresente', () => {
      this.atualizarListaPresenca(); // Atualiza a lista quando um novo aluno é reconhecido
    });
  }

  // Função para buscar a lista de presença do endpoint
  atualizarListaPresenca(): void {
    this.http.get<Presenca[]>(`${this.serverUrl}/presenca`).subscribe(
      (data) => {
        this.listaPresenca = data;
      },
      (error) => {
        console.error('Erro ao atualizar a lista de presença:', error);
      }
    );
  }
}
