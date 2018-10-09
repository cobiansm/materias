import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { HistoriaPage } from '../pages/historia/historia';
import { CsPage } from '../pages/cs/cs';
import { PyePage } from '../pages/pye/pye';
import { CalculoPage } from '../pages/calculo/calculo';
import { MiPage } from '../pages/mi/mi';
import { RoboticaPage } from '../pages/robotica/robotica';
import { ComPage } from '../pages/com/com';
import { PappsPage } from '../pages/papps/papps';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    HistoriaPage,
    CsPage,
    PyePage,
    CalculoPage,
    MiPage,
    RoboticaPage,
    ComPage,
    PappsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    HistoriaPage,
    CsPage,
    PyePage,
    CalculoPage,
    MiPage,
    RoboticaPage,
    ComPage,
    PappsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
