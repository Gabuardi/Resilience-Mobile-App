import { Component, OnInit } from '@angular/core';
import {badges} from './badges';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss'],
})
export class ProgressBarComponent implements OnInit {

  constructor() {
    console.log(badges);
  }

  ngOnInit() {}

}
