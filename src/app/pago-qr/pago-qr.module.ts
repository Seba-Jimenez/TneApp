import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PagoQrPageRoutingModule } from './pago-qr-routing.module';

import { PagoQrPage } from './pago-qr.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PagoQrPageRoutingModule
  ],
  declarations: [PagoQrPage]
})
export class PagoQrPageModule {}
