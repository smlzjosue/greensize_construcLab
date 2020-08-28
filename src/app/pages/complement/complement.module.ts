import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ComplementPageRoutingModule } from './complement-routing.module';

import { ComplementPage } from './complement.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComplementPageRoutingModule
  ],
  declarations: [ComplementPage]
})
export class ComplementPageModule {}
