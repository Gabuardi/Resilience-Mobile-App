import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
    selector: 'app-community-top-chips',
    templateUrl: './community-top-chips.component.html',
    styleUrls: ['./community-top-chips.component.scss'],
})
export class CommunityTopChipsComponent {

    // ------------------------------------------------------------------
    // COMPONENT PROPERTIES
    // ------------------------------------------------------------------
    // INPUTS
    @Input() phase: number;
    // OUTPUTS
    @Output() communitySelected: EventEmitter<object> = new EventEmitter();

    // ------------------------------------------------------------------

    // ------------------------------------------------------------------
    // METHOD -> EMMIT AND EVENT WITH PROVINCE, CITY AND TOWN SELECTED
    // ------------------------------------------------------------------
    emmitEventCommunitySelected(object): void {
        this.communitySelected.emit(object);
    } // METHOD ENDS

} // COMPONENT ENDS
