import { Component, OnInit, OnDestroy } 	from '@angular/core';

import { slideInOutAnimation } 				from '../_animations/slide-in-out.animation';

@Component({
	selector: 'app-business',
	templateUrl: './business.component.html',
	animations: [slideInOutAnimation],
	host: { '[@slideInOutAnimation]': '' }
})
export class BusinessComponent implements OnInit {
	constructor() { }

	ngOnInit() {
		document.body.classList.add("popup-show");
	}
	
	ngOnDestroy() {
		document.body.classList.remove("popup-show");
	}
}