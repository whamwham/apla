import { Injectable } from '@angular/core';

@Injectable()
export class LocalSettingsService {
	constructor() { }
	
	getLanguage():string {
		if (localStorage) {
			return localStorage['Apla-Language'] || "";
		} else {
			return "";
		}
	}

	setLanguage(language: string){
		if (localStorage) {
			localStorage['Apla-Language'] = language;
		}
	}
}