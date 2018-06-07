import {Component, OnInit, OnDestroy} from '@angular/core';

import {fadeInAnimation} from '../_animations/fade-in.animation';
import {MatDialog, MatIconRegistry} from '@angular/material';
import {DomSanitizer} from '@angular/platform-browser';
import {PopupformComponent} from '../popupform/popupform.component';

@Component({
    selector: 'app-government',
    templateUrl: './government.component.html',
    animations: [fadeInAnimation],
    host: {'[@fadeInAnimation]': ''}
})
export class GovernmentComponent implements OnInit, OnDestroy {
    constructor(iconRegistry: MatIconRegistry,
                sanitizer: DomSanitizer, public dialog: MatDialog ) {
        iconRegistry.addSvgIcon('flag-UAE', sanitizer.bypassSecurityTrustResourceUrl('/assets/flags/ae.svg'));
        iconRegistry.addSvgIcon('flag-India', sanitizer.bypassSecurityTrustResourceUrl('/assets/flags/in.svg'));
        iconRegistry.addSvgIcon('flag-Russia', sanitizer.bypassSecurityTrustResourceUrl('/assets/flags/ru.svg'));
        iconRegistry.addSvgIcon('flag-Netherlands', sanitizer.bypassSecurityTrustResourceUrl('/assets/flags/an.svg'));
    }

    ngOnInit() {}
    ngOnDestroy() {}

    openDialog(): void {
        const dialogRef = this.dialog.open(PopupformComponent, {});

        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
        });
    }
}
