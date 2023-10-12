import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageComponent } from './@components/page/page.component';
import { HeroContentComponent } from './@components/hero-content/hero-content.component';
import { DescrizioneComponent } from './@components/descrizione/descrizione.component';
import { CardsComponent } from './@components/cards/cards.component';
import { FormComponent } from './@components/form/form.component';
import { WhatsappWidgetComponent } from './@components/whatsapp-widget/whatsapp-widget.component';
import { ContattiComponent } from './@components/contatti/contatti.component';

@NgModule({
  declarations: [
    AppComponent,
    PageComponent,
    HeroContentComponent,
    DescrizioneComponent,
    CardsComponent,
    FormComponent,
    WhatsappWidgetComponent,
    ContattiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
