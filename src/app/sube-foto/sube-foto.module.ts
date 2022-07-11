import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SubeFotoPageRoutingModule } from './sube-foto-routing.module';

import { SubeFotoPage } from './sube-foto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SubeFotoPageRoutingModule
  ],
  declarations: [SubeFotoPage]
})
export class SubeFotoPageModule {}
