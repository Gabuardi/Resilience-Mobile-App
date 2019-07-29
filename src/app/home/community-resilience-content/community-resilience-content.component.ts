import {Component, Input} from '@angular/core';

@Component({
    selector: 'app-community-resilience-content',
    templateUrl: './community-resilience-content.component.html',
    styleUrls: ['./community-resilience-content.component.scss'],
})
export class CommunityResilienceContentComponent {

    // ------------------------------------------------------------------
    // COMPONENT PROPERTIES
    // ------------------------------------------------------------------
    // INPUT
    @Input() resilienceProgress: number;
    // ------------------------------------------------------------------

} // COMPONENT ENDS
