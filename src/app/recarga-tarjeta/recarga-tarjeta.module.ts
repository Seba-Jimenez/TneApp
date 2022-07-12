import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecargaTarjetaPageRoutingModule } from './recarga-tarjeta-routing.module';

import { RecargaTarjetaPage } from './recarga-tarjeta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecargaTarjetaPageRoutingModule
  ],
  declarations: [RecargaTarjetaPage]
})
export class RecargaTarjetaPageModule {}
