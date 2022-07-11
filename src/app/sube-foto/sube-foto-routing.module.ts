import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SubeFotoPage } from './sube-foto.page';

const routes: Routes = [
  {
    path: '',
    component: SubeFotoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SubeFotoPageRoutingModule {}
