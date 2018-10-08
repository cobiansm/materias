import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HistoriaPage } from '../historia/historia';
import { CsPage } from '../cs/cs';
import { PyePage } from '../pye/pye';
import { CalculoPage } from '../calculo/calculo';
import { MiPage } from '../mi/mi';
import { RoboticaPage } from '../robotica/robotica';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  historia = HistoriaPage;
  cs = CsPage;
  pye = PyePage;
  calculo = CalculoPage;
  mi = MiPage;
  rob = RoboticaPage;
  constructor(public navCtrl: NavController) {

  }

  clickHistoria() {
    this.navCtrl.push(this.historia);
  }

  clickCS(){
    this.navCtrl.push(this.cs);
  }

  clickPyE() {
    this.navCtrl.push(this.pye);
  }

  clickCAL() {
    this.navCtrl.push(this.calculo);
  }

  clickMI() {
    this.navCtrl.push(this.mi);
  }

  clickROB() {
    this.navCtrl.push(this.rob);
  }

}
