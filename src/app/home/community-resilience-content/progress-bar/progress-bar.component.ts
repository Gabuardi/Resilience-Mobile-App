import { Component, OnInit } from '@angular/core';
import {badges} from './badges';
import {ProgressBarBadge} from '../../../interfaces/progress-bar-badge';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss'],
})
export class ProgressBarComponent implements OnInit {

  BADGES: ProgressBarBadge[] = badges;

  ngOnInit() {}

} // COMPONENT ENDS
