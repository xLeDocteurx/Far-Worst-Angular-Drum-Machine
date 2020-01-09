import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { DrumkitChoiceComponent } from './drumkit-choice/drumkit-choice.component';
import { DrumkitListElementComponent } from './drumkit-choice/drumkit-list-element/drumkit-list-element.component';
import { PlayComponent } from './play/play.component';
import { E404Component } from './e404/e404.component';

@NgModule({
  declarations: [
    AppComponent,
    DrumkitChoiceComponent,
    DrumkitListElementComponent,
    HomeComponent,
    HeaderComponent,
    PlayComponent,
    E404Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
