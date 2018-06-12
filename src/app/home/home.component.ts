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

    anim6 = {
        container: 'screen4',
        object: 'container4',
        isBefore: false,
        isAfter: false
    }

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
        const number = this.window.pageYOffset || this.document.documentElement.scrollTop || this.document.body.scrollTop || 0;
        if (number > 100) {
        }
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

