import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  // mise en place de lazy loading 
  //on passe directement sur la visu des relevés
  {path: '', loadChildren: ()=> import('./statements/statements.module').then(m=>m.StatementsModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
