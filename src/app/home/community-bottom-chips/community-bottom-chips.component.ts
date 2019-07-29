import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-community-bottom-chips',
  templateUrl: './community-bottom-chips.component.html',
  styleUrls: ['./community-bottom-chips.component.scss'],
})
export class CommunityBottomChipsComponent {

  // ------------------------------------------------------------------
  // COMPONENT PROPERTIES
  // ------------------------------------------------------------------
  // INPUTS
  @Input() totalProgress: number;
  @Input() phaseProgress: number;
  // ------------------------------------------------------------------

} // COMPONENT ENDS
