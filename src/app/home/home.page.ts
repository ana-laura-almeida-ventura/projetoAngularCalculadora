import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class HomePage {
  resultado: number = 0;

  somar(valor1: number, valor2: number) {
    this.resultado = valor1 + valor2;
  }
}
