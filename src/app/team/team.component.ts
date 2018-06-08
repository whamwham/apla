import {Component, OnInit, ViewChild, Input} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {SwiperDirective, SwiperConfigInterface} from 'ngx-swiper-wrapper';

@Component({
    selector: 'app-team',
    templateUrl: './team.component.html'
})
export class TeamComponent implements OnInit {
    team: Array<number>;
    tr: TranslateService;

    public config3: SwiperConfigInterface = {
        direction: 'horizontal',
        slidesPerView: 4,
        slidesPerGroup: 4,
        loop: false,
        keyboard: false,
        mousewheel: false,
        scrollbar: false,
        navigation: true,
        //pagination: {
        //    el: '.swiper-pagination',
         //   type: 'bullets',
         //   clickable: true
        //},
        watchOverflow: true,
        observer: true,
        breakpoints: {
            1024: {
                slidesPerView: 4,
                slidesPerGroup: 4,
            },
            900: {
                slidesPerView: 3,
                slidesPerGroup: 3,
            },
            700: {
                slidesPerView: 2,
                slidesPerGroup: 2,
            },
            450: {
                slidesPerView: 1,
                slidesPerGroup: 1,
                centeredSlides: true
            }
        }
    };

    @ViewChild(SwiperDirective) directiveRef: SwiperDirective;
    @Input() teamPointer: '';

    constructor(private translate: TranslateService) {
        this.tr = translate;
        translate.stream('TEAM').subscribe((response: any) => {
            this.team = response.filter(function (member) {
                return member.IMG !== '';
            });
        });
    }

    ngOnInit() {
        // console.log(this.teamPointer);
        this.tr.stream(this.teamPointer).subscribe((response: any) => {
            this.team = response
                .map( function (member) {
                    if (!member.NAMED) { member.NAMED = member.NAME.replace( ' ', '<br/>' ); }
                    if (!member.SHORT) { member.SHORT = member.DESCR.substring(0, 100 ); }
                    return member;
                })
                .filter(function (member) {
                return member.IMG !== '';
            });
        });
    }
}

