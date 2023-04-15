import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewPokemonComponent } from './Components/view-pokemon/view-pokemon.component';

const routes: Routes = [
  {path:'viewPokemon/:nome/:id/:img', component: ViewPokemonComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
