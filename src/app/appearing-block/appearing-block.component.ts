import {Component, HostListener, ElementRef, OnInit, Inject} from '@angular/core';

import {TweenMax, Expo} from "gsap/TweenMax";
import * as $ from 'jquery/dist/jquery.js';

@Component({
    selector: 'app-appearing-block',
    template: `
        <section class="animate">
            <ng-content></ng-content>
        </section>`,
})
export class AppearingBlockComponent implements OnInit {
    private _$win;
    private _$collection = [];

    constructor(@Inject('Window') window: Window, private _el: ElementRef) {
        this._$win = $(window);
    }

    @HostListener('window:scroll', ['$event'])
    checkScroll() {
        this._show();
    }

    ngOnInit() {
        const coll = this._el.nativeElement.getElementsByClassName('animate');
        for (let element of coll) {
            const $el = $(element);
            this._$collection.push($el);
            this._setBasePosition($el);
        }
    }

    private _getNegativeOfsset($elem) {
        return -($elem.height() + 20);
    }

    private _getOffset($elem) {
        return $elem.offset().top - this._$win.scrollTop()
    }

    private _setBasePosition($elem) {
        const offsetElem = this._getOffset($elem);
        let offset = 100, autoAlpha = 0;
        if (offsetElem < this._getNegativeOfsset($elem)) {
            offset = -100;
        } else if (offsetElem > this._$win.height()) {
            offset = 100;
        } else {
            offset = 0;
            autoAlpha = 1;
        }
        TweenMax.set($elem, {y: offset, autoAlpha: autoAlpha});
    }

    private _show() {
        this._$collection.forEach($elem => {
            const offset = this._getOffset($elem);
            if (offset >= this._getNegativeOfsset($elem) && offset <= this._$win.height()) {
                TweenMax.to($elem, 2, {y: 0, autoAlpha: 1, ease: Expo.easeOut});
            }
        });
    }
}
