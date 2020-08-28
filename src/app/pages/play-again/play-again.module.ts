import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlayAgainPageRoutingModule } from './play-again-routing.module';

import { PlayAgainPage } from './play-again.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlayAgainPageRoutingModule
  ],
  declarations: [PlayAgainPage]
})
export class PlayAgainPageModule {}
