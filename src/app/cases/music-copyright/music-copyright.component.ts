import {Component, OnInit} from '@angular/core';

import {fadeInAnimation} from '../../_animations/fade-in.animation';

@Component({
    selector: 'app-music-copyright',
    templateUrl: './music-copyright.component.html',
    animations: [fadeInAnimation],
    host: {'[@fadeInAnimation]': ''}
})
export class MusicCopyrightComponent implements OnInit {

    constructor() {
    }

    ngOnInit() {
    }

}
