import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecargaTarjetaPage } from './recarga-tarjeta.page';

const routes: Routes = [
  {
    path: '',
    component: RecargaTarjetaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecargaTarjetaPageRoutingModule {}
