import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StatementsRoutingModule } from './statements-routing.module';
import { StatementsComponent } from './statements/statements.component';


@NgModule({
  declarations: [StatementsComponent],
  imports: [
    CommonModule,
    StatementsRoutingModule
  ]
})
export class StatementsModule { }
