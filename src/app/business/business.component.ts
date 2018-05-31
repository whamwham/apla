import { Component, OnInit, OnDestroy } 	from '@angular/core';

import { fadeInAnimation } 									from '../_animations/fade-in.animation';

@Component({
	selector: 'app-business',
	templateUrl: './business.component.html',
	animations: [fadeInAnimation],
	host: { '[@fadeInAnimation]': '' }
})
export class BusinessComponent implements OnInit {
	constructor() { }

	ngOnInit() {
		//document.body.classList.add("popup-show");
	}
	
	ngOnDestroy() {
		//document.body.classList.remove("popup-show");
	}
}