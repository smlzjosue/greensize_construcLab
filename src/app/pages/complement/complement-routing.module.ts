import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComplementPage } from './complement.page';

const routes: Routes = [
  {
    path: '',
    component: ComplementPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComplementPageRoutingModule {}
