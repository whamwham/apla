import { Component, OnInit } from '@angular/core';
import {PopupformComponent} from '../popupform/popupform.component';
import {MatDialog} from '@angular/material';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  constructor(public dialog: MatDialog ) { }

  ngOnInit() {
  }

    openDialog(): void {
        const dialogRef = this.dialog.open(PopupformComponent, {});

        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
        });
    }

}
