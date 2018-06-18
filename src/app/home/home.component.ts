import {Component, ViewChild, OnInit, HostListener, Inject} from '@angular/core';
import {DOCUMENT, DomSanitizer} from '@angular/platform-browser';
import {MatDialog, MatIconRegistry} from '@angular/material';

import {fadeInAnimation} from '../_animations/fade-in.animation';

import {SwiperDirective, SwiperConfigInterface} from 'ngx-swiper-wrapper';
import {PopupformComponent} from '../popupform/popupform.component';
import {WINDOW} from '../_services/window.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    animations: [fadeInAnimation],
    host: {'[@fadeInAnimation]': ''}
})
export class HomeComponent implements OnInit {
    public config: SwiperConfigInterface = {
        direction: 'horizontal',
        slidesPerView: 1,
        loop: true,
        keyboard: false,
        mousewheel: false,
        scrollbar: false,
        navigation: true,
        pagination: true
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
        container: 'screen4',
        containerRef: null,
        object: 'container4',
        objRef: null,
        started: false
    };

    @ViewChild(SwiperDirective) directiveRef: SwiperDirective;

    constructor(public dialog: MatDialog, iconRegistry: MatIconRegistry,
                sanitizer: DomSanitizer,
                @Inject(DOCUMENT) private document: Document,
                @Inject(WINDOW) private window: Window) {
        iconRegistry.addSvgIcon('flag-UAE', sanitizer.bypassSecurityTrustResourceUrl('/assets/flags/ae.svg'));
        iconRegistry.addSvgIcon('flag-India', sanitizer.bypassSecurityTrustResourceUrl('/assets/flags/in.svg'));
        iconRegistry.addSvgIcon('flag-Russia', sanitizer.bypassSecurityTrustResourceUrl('/assets/flags/ru.svg'));
        iconRegistry.addSvgIcon('flag-Netherlands', sanitizer.bypassSecurityTrustResourceUrl('/assets/flags/an.svg'));
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
        this.anim.isBefore = ((this.anim.containerRef.offsetTop - this.window.innerHeight) > pos);
        this.anim.isAfter = ((this.anim.containerRef.offsetTop + this.anim.containerRef.clientHeight) < pos);
        const inSide = (!this.anim.isAfter && !this.anim.isBefore);

        const objCenter = this.anim.objRef.offsetTop + this.anim.objRef.clientHeight / 2 - this.window.innerHeight / 2;

        if (this.anim.started) {
            if (this.anim.isBefore || this.anim.isAfter) {
                this.anim.started = false;
                this.anim.containerRef.classList.remove('animation-started');
                this.anim.containerRef.classList.remove('animation-stopped');
                console.log('STOPPED');
            } else {
                const stepDist = Math.floor(( (pos - this.anim.containerRef.offsetTop) * 10 / this.window.innerHeight)  );
                console.log(stepDist);
                if (stepDist >= 0) {
                    if (stepDist < 7) {
                        this.anim.objRef.classList.remove('step-' + this.anim.currStep);
                        this.anim.objRef.classList.add('step-' + stepDist);
                        this.anim.currStep = stepDist;
                    }
                    if (stepDist > 7) {
                        this.anim.containerRef.classList.add('animation-stopped');
                        this.window.scrollBy(0, -this.window.innerHeight * .7);
                        this.anim.containerRef.classList.remove('animation-started');
                        this.anim.started = false;
                    }
                }
            }
        } else {
            if (objCenter > pos - 50 && objCenter < pos + 50 && this.anim.currDir) {
                this.anim.started = true;
                this.anim.alreadyRun = true;
                this.anim.containerRef.classList.add('animation-started');
                this.anim.containerRef.classList.remove('animation-stopped');
                this.anim.objRef.classList.remove('step-6');
                console.log('STARTED');
            }
            else {
                if(this.anim.isAfter && !this.anim.currDir && !this.anim.alreadyRun ) {
                    this.anim.objRef.classList.add('step-6');
                }
                if(this.anim.isBefore && this.anim.currDir && !this.anim.alreadyRun ) {
                    this.anim.objRef.classList.remove('step-6');
                }
            }
        }

        this.anim.currPos = pos;
//        console.log(this.anim.isBefore, this.anim.isAfter, inSide);
    }


    ngOnInit() {
    }

    openDialog(): void {
        const dialogRef = this.dialog.open(PopupformComponent, {});

        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
        });
    }

}

