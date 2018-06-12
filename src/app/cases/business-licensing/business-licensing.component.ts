import { Component, OnInit } from '@angular/core';
import {fadeInAnimation} from '../../_animations/fade-in.animation';

@Component({
  selector: 'app-business-licensing',
  templateUrl: './business-licensing.component.html',
    animations: [fadeInAnimation],
    host: {'[@fadeInAnimation]': ''}
})
export class BusinessLicensingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
