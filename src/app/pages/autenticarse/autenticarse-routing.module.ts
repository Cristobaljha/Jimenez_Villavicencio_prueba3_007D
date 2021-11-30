import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AutenticarsePage } from './autenticarse.page';

const routes: Routes = [
  {
    path: '',
    component: AutenticarsePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AutenticarsePageRoutingModule {}
