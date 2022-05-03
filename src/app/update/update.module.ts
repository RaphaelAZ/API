import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpdateProdComponent } from './update-prod.component';
import {HttpClientModule} from "@angular/common/http";
import {AppRoutingModule} from "../app-routing.module";
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    UpdateProdComponent
  ],
  exports: [
    UpdateProdComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ]
})
export class UpdateModule { }
