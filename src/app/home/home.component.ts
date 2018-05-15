import { Component, ViewChild, OnInit } 					from '@angular/core';
import { DomSanitizer } 									from '@angular/platform-browser';
import { MatIconRegistry } 									from '@angular/material';

import { fadeInAnimation } 									from '../_animations/fade-in.animation';

import { SwiperDirective, SwiperConfigInterface } 			from 'ngx-swiper-wrapper';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	animations: [fadeInAnimation],
	host: { '[@fadeInAnimation]': '' }
})
export class HomeComponent implements OnInit {
	public config: SwiperConfigInterface = {
		direction: 'horizontal',
		slidesPerView: 1,
		loop: true,
		keyboard: false,
		mousewheel: false,
		scrollbar: false,
		navigation: true,
		pagination: true
	};
	
	@ViewChild(SwiperDirective) directiveRef: SwiperDirective;
	
	constructor(
		iconRegistry: MatIconRegistry,
		sanitizer: DomSanitizer
	) {
		iconRegistry.addSvgIcon('flag-UAE', sanitizer.bypassSecurityTrustResourceUrl('/assets/flags/ae.svg'));
		iconRegistry.addSvgIcon('flag-India', sanitizer.bypassSecurityTrustResourceUrl('/assets/flags/in.svg'));
		iconRegistry.addSvgIcon('flag-Russia', sanitizer.bypassSecurityTrustResourceUrl('/assets/flags/ru.svg'));
		iconRegistry.addSvgIcon('flag-Netherlands', sanitizer.bypassSecurityTrustResourceUrl('/assets/flags/an.svg'));
	}

	ngOnInit() {
	}

}