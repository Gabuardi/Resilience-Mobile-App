import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-phase-indicator',
    templateUrl: './phase-indicator.component.html',
    styleUrls: ['./phase-indicator.component.scss'],
})
export class PhaseIndicatorComponent implements OnInit {

    // ------------------------------------------------------------------
    // COMPONENT PROPERTIES
    // ------------------------------------------------------------------
    phaseNumber: number;
    className: string;
    // ------------------------------------------------------------------

    // ------------------------------------------------------------------
    // INPUT -> SET THE VALUE OF THE PHASE AND CLASS NAME FOR PHASE CHIP
    // ------------------------------------------------------------------
    @Input()
    set phase(value: number) {
        this.phaseNumber = value;

        // SWITCH
        switch (value) {
            case 1: {
                this.className = 'blue';
                break;
            }
            case 2: {
                this.className = 'lime';
                break;
            }
            case 3: {
                this.className = 'ambar';
                break;
            }
            case 4: {
                this.className = 'wine';
                break;
            }
        } // SWITCH END
    } // INPUT ENDS

    constructor() {
    }

    ngOnInit() {
    }

} // COMPONENT ENDS
