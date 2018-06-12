import {Component, OnInit} from '@angular/core';

import {fadeInAnimation} from '../../_animations/fade-in.animation';

@Component({
    selector: 'app-land-registry',
    templateUrl: './land-registry.component.html',
    animations: [fadeInAnimation],
    host: {'[@fadeInAnimation]': ''}
})
export class LandRegistryComponent implements OnInit {
    constructor() {
    }

    ngOnInit() {
    }
}
