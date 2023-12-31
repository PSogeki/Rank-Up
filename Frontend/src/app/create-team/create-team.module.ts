import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateTeamPageRoutingModule } from './create-team-routing.module';

import { CreateTeamPage } from './create-team.page';
import { ComponentsModule } from '../modules/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateTeamPageRoutingModule,
    ComponentsModule
  ],
  declarations: [CreateTeamPage]
})
export class CreateTeamPageModule {}
