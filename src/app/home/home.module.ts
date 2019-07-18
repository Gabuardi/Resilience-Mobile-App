import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HomePage } from './home.page';
import {CommunityResilienceContentComponent} from './community-resilience-content/community-resilience-content.component';
import {ProgressBarComponent} from './community-resilience-content/progress-bar/progress-bar.component';
import {StepsListComponent} from './steps-list/steps-list.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ])
  ],
  declarations: [HomePage, CommunityResilienceContentComponent, ProgressBarComponent, StepsListComponent]
})

export class HomePageModule {}
