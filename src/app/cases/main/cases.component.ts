import { Component, OnInit } 	from '@angular/core';

import { fadeInAnimation } 		from '../../_animations/fade-in.animation';

@Component({
	selector: 'app-cases',
	templateUrl: './cases.component.html',
	animations: [fadeInAnimation],
	host: { '[@fadeInAnimation]': '' }
})
export class CasesComponent implements OnInit {
	constructor() { }

	ngOnInit() {
	}
}