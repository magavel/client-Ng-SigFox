import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { StatementsRoutingModule } from './statements-routing.module';
import { StatementsComponent } from './statements/statements.component';



@NgModule({
  declarations: [StatementsComponent],
  imports: [
    CommonModule,
    StatementsRoutingModule,
    HttpClientModule
  ]
})
export class StatementsModule { }
