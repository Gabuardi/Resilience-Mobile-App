import {Component} from '@angular/core';
import {ResilienceService} from '../services/resilience.service';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage {

    // --------------------------------------------------------------------------------------
    // COMPONENT PROPERTIES
    // --------------------------------------------------------------------------------------
    phase: number;
    resilienceProgress: number;
    phaseProgress: number;

    // --------------------------------------------------------------------------------------

    constructor(private resilienceService: ResilienceService) {
    }

    // --------------------------------------------------------------------------------------
    // METHOD -> IS CALLED WHEN COMMUNITY IS SELECTED AND BRING DATA FROM COMMUNITY SELECTED
    // --------------------------------------------------------------------------------------
    communitySelectedEventHandler(object) {

        // PRINT IN CONSOLE THE OBJECT DATA
        console.log(`${object.province} - ${object.city} - ${object.town}`);

        // CALL GET COMMUNITY RESILIENCE ENDPOINT
        this.resilienceService.getCommunityResilience(object.province, object.city, object.town).subscribe(value => {

            // PRINT IN CONSOLE THE DATA
            console.log(value);

            // SAVE THE DATA IN COMPONENT PROPERTIES
            this.phase = value.RESILIENCIA.RESILIENCIA.stage;
            this.resilienceProgress = value.RESILIENCIA.resilience_total_level;
            this.phaseProgress = value.RESILIENCIA.resilience_stage_level;

        });

    } // METHOD END

} // COMPONENT ENDS
