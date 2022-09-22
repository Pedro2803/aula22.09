import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'segundoprojeto';
nome = 'pedro'
idade = '21'
esconderCaixa=true;
alterarNome(nome: any) {
  console.log(nome.target.value);
  this.nome = nome.target.value;
  }

lancarDado() {
  return Math.floor(Math.random() * 6) + 1;
  }
  adicionar(nomeImput:any) {
    console.log(nomeImput.value);
    this.nome=nomeImput.value;
    this.esconderCaixa= nomeImput.value.lenght <= 0;
    }
}

