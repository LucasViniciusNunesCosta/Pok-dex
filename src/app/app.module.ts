import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Pages/home/home.component';
import { CardComponent } from './Components/card/card.component';
import { HttpClientModule } from '@angular/common/http';
import {SearchPokemonComponent} from './Components/search-pokemon/search-pokemon.component'
import { ListaPokemonComponent } from './Components/lista-pokemon/lista-pokemon.component';
import { BannerComponent } from './Components/banner/banner.component';
import { ViewPokemonComponent } from './Components/view-pokemon/view-pokemon.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CardComponent,
    ListaPokemonComponent,
    SearchPokemonComponent,
    BannerComponent,
    ViewPokemonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
