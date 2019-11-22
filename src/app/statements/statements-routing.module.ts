import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StatementsComponent } from './statements/statements.component';


//permet de mettre le lazy loading en place
const routes: Routes = [
  {path: '', component: StatementsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StatementsRoutingModule { }
