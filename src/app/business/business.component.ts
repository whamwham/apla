import {Component, OnInit, OnDestroy} from '@angular/core';

import {fadeInAnimation} from '../_animations/fade-in.animation';
import {PopupformComponent} from '../popupform/popupform.component';
import {MatDialog} from '@angular/material';

@Component({
    selector: 'app-business',
    templateUrl: './business.component.html',
    animations: [fadeInAnimation],
    host: {'[@fadeInAnimation]': ''}
})
export class BusinessComponent implements OnInit {
    constructor(public dialog: MatDialog) {
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