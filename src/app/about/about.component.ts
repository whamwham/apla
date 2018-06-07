import {Component, ViewChild, OnInit, HostListener, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {TranslateService} from '@ngx-translate/core';
import {WINDOW} from '../_services/window.service';

import {fadeInAnimation} from '../_animations/fade-in.animation';

import {SwiperDirective, SwiperConfigInterface} from 'ngx-swiper-wrapper';

import {VacanciesComponent} from '../vacancies/vacancies.component';
import {DOCUMENT} from '@angular/platform-browser';

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    animations: [fadeInAnimation],
    host: {'[@fadeInAnimation]': ''}
})
export class AboutComponent implements OnInit {
    vacancies: Array<number>;

    public config: SwiperConfigInterface = {
        direction: 'horizontal',
        slidesPerView: 'auto',
        freeMode: true,
        grabCursor: true,
        keyboard: false,
        mousewheel: true,
        scrollbar: false,
        navigation: false,
        pagination: false
    };

    public config2: SwiperConfigInterface = {
        direction: 'horizontal',
        slidesPerView: 4,
        loop: true,
        keyboard: false,
        mousewheel: false,
        scrollbar: false,
        navigation: true,
        pagination: true
    };

    @ViewChild(SwiperDirective) directiveRef: SwiperDirective;

    constructor(public dialog: MatDialog, private translate: TranslateService, @Inject(DOCUMENT) private document: Document, @Inject(WINDOW) private window: Window ) {
        translate.stream('VACANCIES').subscribe((response: any) => {
            this.vacancies = response;
        });
    }


    @HostListener('window:scroll', [])
    onWindowScroll() {
        const number = this.window.pageYOffset || this.document.documentElement.scrollTop || this.document.body.scrollTop || 0;
        if (number > 100) {
        }
    }


    ngOnInit() {
    }

    openDialog(data): void {
        let dialogRef = this.dialog.open(VacanciesComponent, {
            data: data
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
        });
    }
}