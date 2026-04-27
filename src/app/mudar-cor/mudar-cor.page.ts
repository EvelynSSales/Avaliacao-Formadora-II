import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, NavController } from '@ionic/angular';

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

  constructor(private navCtrl: NavController) {}

  mudarCorBotao() {
    this.btnBgColor = `rgb(${this.r}, ${this.g}, ${this.b})`;
  }

  mudarCorFundo() {
    this.contentBgColor = `rgb(${this.r}, ${this.g}, ${this.b})`;
  }

  voltar() {
    this.navCtrl.back();
  }
}