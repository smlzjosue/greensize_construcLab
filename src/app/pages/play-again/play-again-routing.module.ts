import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlayAgainPage } from './play-again.page';

const routes: Routes = [
  {
    path: '',
    component: PlayAgainPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlayAgainPageRoutingModule {}
