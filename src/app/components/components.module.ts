import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SoundControlComponent } from './sound-control/sound-control.component';
import { LeaveComponent } from './leave/leave.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { NextPreviusComponent } from './next-previus/next-previus.component';
import { ShowSlideComponent } from './show-slide/show-slide.component';
import { GoHomeComponent } from './go-home/go-home.component';
import { ModalComponent } from './modal/modal.component';
import { ClueComponent } from './clue/clue.component';
import { IonicModule } from '@ionic/angular';
import { MessageComponent } from './message/message.component';



@NgModule({
  declarations: [
    SoundControlComponent,
    LeaveComponent,
    ProgressBarComponent,
    NextPreviusComponent,
    ShowSlideComponent,
    GoHomeComponent,
    ModalComponent,
    ClueComponent,
    MessageComponent,
    IonicModule
  ],
  exports: [
    SoundControlComponent,
    LeaveComponent,
    ProgressBarComponent,
    NextPreviusComponent,
    ShowSlideComponent,
    GoHomeComponent,
    ModalComponent,
    ClueComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
