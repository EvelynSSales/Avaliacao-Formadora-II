import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-color-change',
  templateUrl: './mudar-cor.page.html',
  styleUrls: ['./mudar-cor.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class MudarCorPage {
  r: number = 0;
  g: number = 0;
  b: number = 0;

  btnBgColor: string = 'var(--ion-color-primary)';
  contentBgColor: string = 'var(--ion-background-color)';

  constructor() { }

  //Botão 1
  mudarCorBotao() {
    this.btnBgColor = `rgb(${this.r}, ${this.g}, ${this.b})`;
  }

  //Botão 2
  mudarCorFundo() {
    this.contentBgColor = `rgb(${this.r}, ${this.g}, ${this.b})`;
  }
}