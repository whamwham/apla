import {Component, Inject, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material';
import {TranslateService} from '@ngx-translate/core';
import {WINDOW} from '../_services/window.service';
import {PageScrollConfig} from 'ngx-page-scroll';
import {fadeInAnimation} from '../_animations/fade-in.animation';
import {VacanciesComponent} from '../vacancies/vacancies.component';
import {DOCUMENT} from '@angular/platform-browser';
import * as $ from 'jquery/dist/jquery.js';
import 'vide/dist/jquery.vide.js';

@Component({
    selector: 'app-career',
    templateUrl: './career.component.html',
    animations: [fadeInAnimation],
    host: {'[@fadeInAnimation]': ''}
})
export class CareerComponent implements OnInit {
    vacancies: Array<number>;
    activeIndexText = 0;
    collectionText = [
        ['THE END', 'OF BUREAUCRACY'],
        ['AN ELECTION', 'THAT CANNOT', 'BE FAKED'],
        ['A DIGITAL GOVERNMENT', 'SOLVING YOUR QUESTION', 'STRAIGHT AWAY'],
        ['A HIGH-SPEED ONLINE', 'HEALTHCARE SYSTEM', 'THAT SAVES LIVES']
    ];

    constructor(public dialog: MatDialog, private translate: TranslateService, @Inject(DOCUMENT) private document: Document, @Inject(WINDOW) private window: Window) {
        translate.stream('VACANCIES').subscribe((response: any) => this.vacancies = response);
        PageScrollConfig.defaultScrollOffset = 72;
        PageScrollConfig.defaultDuration = 500;
    }

    changeText() {
        if (this.activeIndexText >= this.collectionText.length - 1) {
            this.activeIndexText = 0;
        } else {
            this.activeIndexText++;
        }
    }

    openDialog(data): void {
        let dialogRef = this.dialog.open(VacanciesComponent, {
            data: data
        });
    }

    ngOnInit() {
        $('#video').vide('/assets/video/career-video-480');
    }
}
