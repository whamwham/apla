import {Component, OnInit} from '@angular/core';
import {fadeInAnimation} from '../../_animations/fade-in.animation';

@Component({
    selector: 'app-survey-poll',
    templateUrl: './survey-poll.component.html',
    animations: [fadeInAnimation],
    host: {'[@fadeInAnimation]': ''}
})

export class SurveyPollComponent implements OnInit {

    constructor() {
    }

    ngOnInit() {
    }

}
