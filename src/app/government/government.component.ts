import { Component, OnInit, OnDestroy } 	from '@angular/core';

import { slideInOutAnimation } 				from '../_animations/slide-in-out.animation';

@Component({
	selector: 'app-government',
	templateUrl: './government.component.html',
	animations: [slideInOutAnimation],
	host: { '[@slideInOutAnimation]': '' }
})
export class GovernmentComponent implements OnInit, OnDestroy {
	constructor() { }

	ngOnInit() {
		document.body.classList.add("popup-show");
	}
	
	ngOnDestroy() {
		document.body.classList.remove("popup-show");
	}
}