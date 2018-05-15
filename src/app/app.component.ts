import { Component } 							from '@angular/core';

import { LoadingService, SimulatedLoading } 	from "./_services/loading.service";
import { DOMEvents } 							from "./_services/dom-events.service";

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html'
})
export class AppComponent {
	public loader: SimulatedLoading;

	constructor(loadingService: LoadingService, domEvents: DOMEvents) {
		this.loader = null;

		loadingService.getLoading().subscribe(
			( loader ) => {
				this.loader = loader;
				domEvents.triggerOnDocument("appready");
			}
		);
	}
	
	onActivate(event) {
		//window.scroll(0,0);
	}
}