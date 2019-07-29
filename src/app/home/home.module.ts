import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IonicModule} from '@ionic/angular';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';

import {HomePage} from './home.page';
import {CommunityResilienceContentComponent} from './community-resilience-content/community-resilience-content.component';
import {ProgressBarComponent} from './community-resilience-content/progress-bar/progress-bar.component';
import {BadgeListComponent} from './badge-list/badge-list.component';
import {CommunitySelectorComponent} from './community-top-chips/community-selector/community-selector.component';
import {PhaseIndicatorComponent} from './community-top-chips/phase-indicator/phase-indicator.component';
import {CommunityTopChipsComponent} from './community-top-chips/community-top-chips.component';

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
    declarations: [
        HomePage,
        CommunityResilienceContentComponent,
        CommunityTopChipsComponent,
        BadgeListComponent,
        ProgressBarComponent,
        CommunitySelectorComponent,
        PhaseIndicatorComponent
    ]
})

export class HomePageModule {
}
