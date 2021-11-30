import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AutenticarsePageRoutingModule } from './autenticarse-routing.module';

import { AutenticarsePage } from './autenticarse.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    AutenticarsePageRoutingModule
  ],
  declarations: [AutenticarsePage]
})
export class AutenticarsePageModule {}
