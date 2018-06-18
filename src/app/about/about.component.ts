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

    anim = {
        currPos: 0,
        currDir: 0, // 0 - ahead, 1 - back
        currStep: 0,
        isBefore: false,
        isAfter: false,
        alreadyRun: false,
        container: 'mission_container',
        containerRef: null,
        object: 'mission_object',
        objRef: null,
        started: false
    };


    @ViewChild(SwiperDirective) directiveRef: SwiperDirective;

    constructor(public dialog: MatDialog, private translate: TranslateService, @Inject(DOCUMENT) private document: Document, @Inject(WINDOW) private window: Window) {
        translate.stream('VACANCIES').subscribe((response: any) => {
            this.vacancies = response;
        });
    }


    @HostListener('window:scroll', [])
    onWindowScroll() {
        const pos = this.window.pageYOffset || this.document.documentElement.scrollTop || this.document.body.scrollTop || 0;
        if (!this.anim.objRef) {
            this.anim.objRef = this.document.getElementById(this.anim.object);
        }
        if (!this.anim.containerRef) {
            this.anim.containerRef = this.document.getElementById(this.anim.container);
        }

        this.anim.currDir = (this.anim.currPos > pos) ? 0 : 1;
        this.anim.isBefore = ((this.anim.containerRef.offsetTop - this.window.innerHeight) > pos + 50);
        this.anim.isAfter = ((this.anim.containerRef.offsetTop + this.anim.containerRef.clientHeight) < pos - 50);
        const inSide = (!this.anim.isAfter && !this.anim.isBefore);

        const objCenter = this.anim.objRef.offsetTop + this.anim.objRef.clientHeight / 2 - this.window.innerHeight / 2;

        if (this.anim.started) {
            if (this.anim.isBefore || this.anim.isAfter) {
                this.anim.started = false;
                this.anim.containerRef.classList.remove('animation-started');
                this.anim.containerRef.classList.remove('animation-stopped');
                console.log('STOPPED');
            } else {
                const stepDist = Math.floor(((pos - this.anim.containerRef.offsetTop + this.window.innerHeight) * 10 / this.window.innerHeight));
                console.log(stepDist);
                if (stepDist >= 0) {
                    if (stepDist < 21) {
                        this.anim.containerRef.classList.remove('step-' + this.anim.currStep);
                        this.anim.containerRef.classList.add('step-' + stepDist);
                        this.anim.currStep = stepDist;
                    }
                    if (stepDist > 21) {
                        this.anim.containerRef.classList.add('animation-stopped');
                        this.anim.containerRef.classList.add('step-20');
                        this.window.scrollBy(0, - this.window.innerHeight * 1.1);
                        this.anim.containerRef.classList.remove('animation-started');
                        this.anim.started = false;
                    }
                }
            }
        } else {
            if ((this.anim.containerRef.offsetTop - this.anim.containerRef.clientHeight) > pos - 50 && (this.anim.containerRef.offsetTop - this.anim.containerRef.clientHeight) < pos + 50 && this.anim.currDir) {
                this.anim.started = true;
                this.anim.alreadyRun = true;
                this.anim.containerRef.classList.add('animation-started');
                this.anim.containerRef.classList.remove('animation-stopped');
                this.anim.objRef.classList.remove('step-6');
                console.log('STARTED');
            }
/*            else {
                if (this.anim.isAfter && !this.anim.currDir && !this.anim.alreadyRun) {
                    this.anim.objRef.classList.add('step-6');
                }
                if (this.anim.isBefore && this.anim.currDir && !this.anim.alreadyRun) {
                    this.anim.objRef.classList.remove('step-6');
                }
            }*/
        }

        console.log(pos, this.anim.containerRef.offsetTop, this.anim.containerRef.clientHeight);

        this.anim.currPos = pos;
//        console.log(this.anim.isBefore, this.anim.isAfter, inSide);
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