import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalHPage } from './modal-h.page';

const routes: Routes = [
  {
    path: '',
    component: ModalHPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalHPageRoutingModule {}
