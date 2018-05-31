import {Component, OnInit, OnDestroy} from '@angular/core';

import {fadeInAnimation} from '../_animations/fade-in.animation';

@Component({
    selector: 'app-government',
    templateUrl: './government.component.html',
    animations: [fadeInAnimation],
    host: {'[@fadeInAnimation]': ''}
})
export class GovernmentComponent implements OnInit, OnDestroy {
    constructor() {
    }

    ngOnInit() {
        //document.body.classList.add("popup-show");
    }

    ngOnDestroy() {
        //document.body.classList.remove("popup-show");
    }
}