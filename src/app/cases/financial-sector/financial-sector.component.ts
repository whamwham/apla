import { Component, OnInit } from '@angular/core';
import {fadeInAnimation} from '../../_animations/fade-in.animation';

@Component({
  selector: 'app-financial-sector',
  templateUrl: './financial-sector.component.html',
    animations: [fadeInAnimation],
    host: {'[@fadeInAnimation]': ''}
})
export class FinancialSectorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
