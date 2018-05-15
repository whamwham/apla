import { Component, OnInit } 	from '@angular/core';

import { fadeInAnimation } 		from '../../_animations/fade-in.animation';

@Component({
	selector: 'app-supply-chain',
	templateUrl: './supply-chain.component.html',
	animations: [fadeInAnimation],
	host: { '[@fadeInAnimation]': '' }
})
export class SupplyChainComponent implements OnInit {
	constructor() { }

	ngOnInit() {
	}
}