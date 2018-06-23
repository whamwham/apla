import {Component, OnChanges, Input, Output, EventEmitter} from '@angular/core';

import * as $ from 'jquery/dist/jquery.js';

interface lineParameter {
    text: String,
    state?: String
}
const animTime = 550;
@Component({
    selector: 'app-appearing-text',
    styles: [
        ' * { transition: all ' + animTime + 'ms ease; }'
    ],
    template: `
        <div *ngFor="let line of collection"
             [ngClass]="line.state"
             class="layer-one">
            <div class="layer-second">
                <div class="layer-third">{{ line.text }}</div>
            </div>
        </div>
    `
})

export class AppearingTextComponent {

    @Input() lines: lineParameter[];
    @Output() onHide = new EventEmitter<any>();
    collection;
    private _delay = 100;
    private _timeShow = 2000;

    ngOnChanges() {
        this.collection = this.lines.map(line => {
            return {
                text: line,
                state: null
            }
        })
        let _prevDelayHide = 0, _prevDelayShow = 0;
        this.collection.forEach(line => {
            _prevDelayHide = _prevDelayHide + this._delay;
            setTimeout(() => {
                line.state = 'show';
            }, _prevDelayHide);
        });
        setTimeout(() => {
            this.collection.slice().reverse().forEach((line, i) => {
                _prevDelayShow = _prevDelayShow + this._delay;
                setTimeout(() => {
                    line.state = null;
                    if (i === this.collection.length - 1) {
                        setTimeout(() => {
                            this.onHide.emit();
                        }, animTime);
                    }
                }, _prevDelayShow);
            });
        }, _prevDelayHide + animTime + this._timeShow);
    }
}
