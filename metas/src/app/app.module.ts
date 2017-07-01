import { MetaPage } from './../pages/meta/meta';
import { MetasService } from './../services/meta.service';
import { MetasPage } from './../pages/metas/metas';
import { CompromissoPage } from './../pages/compromisso/compromisso';
import { CategoriasPage } from './../pages/categorias/categorias';
import { TabsPage } from './../pages/tabs/tabs';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    CategoriasPage,
    CompromissoPage,
    MetasPage,
    MetaPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    CategoriasPage,
    CompromissoPage,
    MetasPage,
    MetaPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    MetasService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
