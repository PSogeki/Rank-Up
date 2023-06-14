import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TaskCompletedPageRoutingModule } from './task-completed-routing.module';

import { TaskCompletedPage } from './task-completed.page';
import { ComponentsModule } from '../modules/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TaskCompletedPageRoutingModule,
    ComponentsModule
  ],
  declarations: [TaskCompletedPage]
})
export class TaskCompletedPageModule {}
