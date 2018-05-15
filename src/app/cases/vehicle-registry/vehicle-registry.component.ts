import { Component, OnInit } 	from '@angular/core';

import { fadeInAnimation } 		from '../../_animations/fade-in.animation';

@Component({
	selector: 'app-vehicle-registry',
	templateUrl: './vehicle-registry.component.html',
	animations: [fadeInAnimation],
	host: { '[@fadeInAnimation]': '' }
})
export class VehicleRegistryComponent implements OnInit {
	constructor() { }

	ngOnInit() {
	}
}