import {Component, Input} from '@angular/core';
import {badges} from './badges';
import {ProgressBarBadge} from '../../../interfaces/progress-bar-badge';

@Component({
    selector: 'app-progress-bar',
    templateUrl: './progress-bar.component.html',
    styleUrls: ['./progress-bar.component.scss'],
})
export class ProgressBarComponent {

    // ------------------------------------------------------------------
    // COMPONENT PROPERTIES
    // ------------------------------------------------------------------
    resilienceProgress: string;
    BADGES: ProgressBarBadge[] = badges;
    // ------------------------------------------------------------------


    // ------------------------------------------------------------------
    // INPUT -> SET THE VALUE OF PROGRESS PROPERTY AND ROUND TO INTEGER
    // ------------------------------------------------------------------
    @Input()
    set progress(value: number) {
        // ROUND TO INTEGER
        const roundedProgress = Math.round(value);

        // CAST TO STRING AND ASSIGN TO COMPONENT PROPERTY
        this.resilienceProgress = String(roundedProgress);
    } // INPUT END

} // COMPONENT ENDS
