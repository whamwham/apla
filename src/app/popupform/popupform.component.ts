import {Component, Inject, OnInit} from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {trigger, style, animate, transition} from '@angular/animations';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
    selector: 'app-popupform',
    templateUrl: './popupform.component.html',
    animations: [
        trigger(
            'errorFeedbackAnimation', [
                transition(':enter', [
                    style({transform: 'translateY(-100%)', opacity: 0}),
                    animate('200ms', style({transform: 'translateY(0)', opacity: 1}))
                ]),
                transition(':leave', [
                    style({transform: 'translateY(0)', opacity: 1}),
                    animate('200ms', style({transform: 'translateY(-100%)', opacity: 0}))
                ])
            ]
        )
    ],
})
export class PopupformComponent implements OnInit {
    popupForm: FormGroup;
    email: FormControl;
    name: FormControl;
    message: FormControl;
    ready = false;
    dublicate = false;

    constructor(private http: HttpClient, public dialogRef: MatDialogRef<PopupformComponent>, @Inject(MAT_DIALOG_DATA) public data: any ) {}

    ngOnInit() {
        this.createFormControls();
        this.createForm();
    }

    createFormControls() {
        this.email = new FormControl('', [
            Validators.required,
            Validators.pattern('[A-Z0-9a-z._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,64}')
        ]);
        this.name = new FormControl('', [
            Validators.required
        ]);
        this.message = new FormControl('', [
            Validators.required
        ]);
    }

    createForm() {
        this.popupForm = new FormGroup({
            email: this.email,
            name: this.name,
            message: this.message,
        });
    }

    subscribe() {
        const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
        const url = 'https://apla.io/getstarted';
        const data = {
            email: this.email.value,
            name: this.name.value,
            message: this.message.value,
        };
        const options = {
            headers: headers,
            responseType: 'text' as 'text'
        };

        this.http.post(url, this.transformRequest(data), options)
            .subscribe(response => {
                if (response === 'OK') {
                    this.ready = true;
                    this.popupForm.reset();
                } else if (response === 'DUP') {
                    this.dublicate = true;
                }
            });

    }

    param(obj) {
        var query = '', name, value, fullSubName, subName, subValue, innerObj, i;

        for (name in obj) {
            value = obj[name];

            if (value instanceof Array) {
                for (i = 0; i < value.length; ++i) {
                    subValue = value[i];
                    fullSubName = name + '[' + i + ']';
                    innerObj = {};
                    innerObj[fullSubName] = subValue;
                    query += this.param(innerObj) + '&';
                }
            } else if (value instanceof Object) {
                for (subName in value) {
                    subValue = value[subName];
                    fullSubName = name + '[' + subName + ']';
                    innerObj = {};
                    innerObj[fullSubName] = subValue;
                    query += this.param(innerObj) + '&';
                }
            } else if (value !== undefined && value !== null) {
                query += encodeURIComponent(name) + '=' + encodeURIComponent(value) + '&';
            }
        }

        return query.length ? query.substr(0, query.length - 1) : query;
    };

    transformRequest(data) {
        return typeof data === 'object' && String(data) !== '[object File]' ? this.param(data) : data;
    };
}
