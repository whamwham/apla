import {Component, OnChanges, Input, Output, EventEmitter} from '@angular/core';
import {trigger, state, style, transition, animate} from '@angular/animations';

interface lineParameter {
    text: String,
    state?: String
}

const heightDiv = '80px',
    offset = '10px',
    animTime = 300;

@Component({
    selector: 'app-appearing-text',
    styles: [
        '.appearing { height: ' + heightDiv + '; margin-top: -' + offset + ';}',
        '.appearing div { ttransform: translateY(-' + offset + '); opacity: 0;}',
    ],
    animations: [
        trigger('appearing', [
            state('show', style({
                height: heightDiv,
                transform: 'translateY(0)',
                opacity: 1,
                transition: animTime + 'ms all ease-in'
            })),
            state('hide', style({
                height: 0,
                opacity: 0,
                transform: 'translateY(' + offset + ')',
                transition: animTime + 'ms all ease-in'
            }))
        ])
    ],
    template: `
        <div class="appearing" *ngFor="let line of collection">
            <div [@appearing]="line.state">
                <p>{{ line.text }}</p>
            </div>
        </div>
    `
})

export class AppearingTextComponent implements OnChanges {

    @Input() lines: lineParameter[];
    @Output() onHide = new EventEmitter<any>();
    private _delay = 150;
    private _timeShow = 1000;
    collection;
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
                    line.state = 'hide';
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
