import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {trigger, style, animate, transition} from '@angular/animations';

@Component({
    selector: 'app-newsletter-alt',
    templateUrl: './newsletteralt.component.html',
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
export class NewsletterAltComponent implements OnInit {
    subscribeForm: FormGroup;
    email: FormControl;
    ready = false;
    dublicate = false;

    constructor(private http: HttpClient) {
    }

    ngOnInit() {
        this.createFormControls();
        this.createForm();
    }

    createFormControls() {
        this.email = new FormControl('', [
            Validators.required,
            Validators.pattern('[A-Z0-9a-z._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,64}')
        ]);
    }

    createForm() {
        this.subscribeForm = new FormGroup({
            email: this.email,
        });
    }

    subscribe() {
        let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
        let url = 'https://apla.io/subscribe';
        let data = {
            email: this.email.value
        };
        let options = {
            headers: headers,
            responseType: 'text' as 'text'
        };

        this.http.post(url, this.transformRequest(data), options)
            .subscribe(response => {
                if (response === 'OK') {
                    this.ready = true;
                    this.subscribeForm.reset();
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