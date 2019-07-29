import {Component} from '@angular/core';

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

    // --------------------------------------------------------------------------------------
    // METHOD -> IS CALLED WHEN COMMUNITY IS SELECTED AND BRING DATA FROM COMMUNITY SELECTED
    // --------------------------------------------------------------------------------------
    communitySelectedEventHandler(object) {
        console.log(`${object.province} - ${object.city} - ${object.town}`);
    } // METHOD END

} // COMPONENT ENDS
