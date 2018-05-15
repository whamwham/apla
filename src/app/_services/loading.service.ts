import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";

import "rxjs/add/observable/of";
import "rxjs/add/operator/delay";
import "rxjs/add/operator/do";

export interface SimulatedLoading {
	id: number;
}

@Injectable()
export class LoadingService {
	constructor() { }

	public getLoading() : Observable<SimulatedLoading> {
		var stream = Observable
			.of({
				id: 1
			})
			.do(
				function() {
					
				}
			)
			.delay( 1000 )
			.do(
				function() {
					
				}
			);

		return( stream );
	}
}