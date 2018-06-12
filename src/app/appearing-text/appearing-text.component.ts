import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {trigger, state, style, transition, animate} from '@angular/animations';

interface lineParameter {
    text: String,
    state?: String
}

const heightDiv = '110px',
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
                opacity: 0
                transform: 'translateY(' + offset + ')',
                transition: animTime + 'ms all ease-in'
            }))
        ])
    ],
    template: `
        <div class="appearing" *ngFor="let line of lines">
            <div [@appearing]="line.state">
                <p>{{ line.text }}</p>
            </div>
        </div>
    `
})

export class AppearingTextComponent implements OnInit {

    @Input() lines: lineParameter[];
    @Output() onHide = new EventEmitter<any>();
    private _delay = 150;
    private _timeShow = 1000;
    private _prevDelayHide = 0;
    private _prevDelayShow = 0;

    ngOnInit() {
        this.lines.forEach(line => {
            this._prevDelayHide = this._prevDelayHide + this._delay;
            setTimeout(() => {
                line.state = 'show';
            }, this._prevDelayHide);
        });
        setTimeout(() => {
            this.lines.slice().reverse().forEach((line, i) => {
                this._prevDelayShow = this._prevDelayShow + this._delay;
                setTimeout(() => {
                    line.state = 'hide';
                    if (i === this.lines.length - 1) {
                        setTimeout(() => {
                            this.onHide.emit();
                        }, animTime);
                    }
                }, this._prevDelayShow);
            });
        }, this._prevDelayHide + animTime + this._timeShow);
    }
}
