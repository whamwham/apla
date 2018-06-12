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
    firstText = true;
    lines = [
        {
            text: 'A high-speed online'
        }, {
            text: 'healtcare system'
        }, {
            text: 'that saves lives'
        }];
    lines2 = [
        {
            text: 'Задача организации'
        }, {
            text: 'требуют определения'
        }, {
            text: 'развитие различных'
        }];

    constructor(public dialog: MatDialog, private translate: TranslateService, @Inject(DOCUMENT) private document: Document, @Inject(WINDOW) private window: Window) {
        translate.stream('VACANCIES').subscribe((response: any) => this.vacancies = response);
        PageScrollConfig.defaultScrollOffset = 72;
        PageScrollConfig.defaultDuration = 500;
    }

    changeText() {
        this.firstText = !this.firstText;
    }

    openDialog(data): void {
        let dialogRef = this.dialog.open(VacanciesComponent, {
            data: data
        });
    }

    ngOnInit() {
        $('#video').vide('/assets/video/Mystic-Landscapes');
    }
}
