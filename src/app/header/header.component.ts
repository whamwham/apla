import {Component, OnInit, HostListener, Inject, ViewChild} from '@angular/core';
import {Location} from '@angular/common';
import {Router} from '@angular/router';
import {Title, DOCUMENT} from '@angular/platform-browser';
import {TranslateService} from '@ngx-translate/core';
import {MatMenuTrigger} from '@angular/material';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

import {LocalSettingsService} from '../_services/localsettings.service';
import {WINDOW} from '../_services/window.service';
import {PopupformComponent} from '../popupform/popupform.component';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    host: {
        '[class.fixed]': 'navIsFixed',
        '[class.white]': 'navIsWhite',
        '[class.active]': 'isActive'
    }
})
export class HeaderComponent implements OnInit {
    language = [];
    isActive: boolean = false;
    navIsFixed: boolean = false;
    navIsWhite: boolean = false;

    constructor(public dialog: MatDialog,
                private titleService: Title,
                private translate: TranslateService,
                public localSettings: LocalSettingsService,
                private location: Location,
                private router: Router,
                @Inject(DOCUMENT) private document: Document,
                @Inject(WINDOW) private window: Window) {
        this.language = [
            ['en', 'ru'],
            ['English', 'Русский']
        ];
        translate.addLangs(this.language[0]);
        translate.setDefaultLang('en');

        let userLang = translate.getBrowserLang();
        userLang = userLang.match(/en|ru/) ? userLang : 'en';

        let storedLang: string = localSettings.getLanguage();
        if (storedLang !== '') {
            userLang = storedLang;
        }

        userLang = 'en';
        translate.use(userLang);

        translate.onLangChange.subscribe(() => {
            translate.get('TITLE').subscribe((res: string) => {
                titleService.setTitle(res);
            });
        });

        router.events.subscribe((val) => {
            if (location.path() === '/cases') {
                this.navIsWhite = true;
            }
            else if (location.path() === '/business') {
                this.navIsWhite = true;
            } else {
                this.navIsWhite = false;
            }
        });
    }


    ngOnInit() {

    }

    @ViewChild(MatMenuTrigger) trigger: MatMenuTrigger;

    MenuStatus() {
        return this.trigger.menuOpen;
    }

    @HostListener('window:scroll', [])
    onWindowScroll() {
        let number = this.window.pageYOffset || this.document.documentElement.scrollTop || this.document.body.scrollTop || 0;
        if (number > 100) {
            this.navIsFixed = true;
        } else {
            this.navIsFixed = false;
        }
    }

    ChangeLanguage(selectLang: string) {
        this.localSettings.setLanguage(selectLang);
        this.translate.use(selectLang);
    }

    ShowMenu = function () {
        this.isActive = !this.isActive;
    };

    openDialog(): void {
        const dialogRef = this.dialog.open(PopupformComponent, {});

        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
        });
    }
}
