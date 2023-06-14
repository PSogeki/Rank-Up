import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateTaskPageRoutingModule } from './create-task-routing.module';

import { CreateTaskPage } from './create-task.page';
import { ComponentsModule } from '../modules/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateTaskPageRoutingModule,
    ComponentsModule
  ],
  declarations: [CreateTaskPage]
})
export class CreateTaskPageModule {}
