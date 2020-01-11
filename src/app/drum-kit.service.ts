import { Injectable } from '@angular/core';

import { DrumKit, DRUMKITS } from './drumkit'

@Injectable({
  providedIn: 'root'
})
export class DrumKitService {

	selectedDrumKit: DrumKit;

	constructor() { }

  	getDrumKits(): DrumKit[] {
		return DRUMKITS;
	}

	getSelectedDrumKit() {
		return this.selectedDrumKit;
	}

	setSelectedDrumKit(drumKit): void {
		this.selectedDrumKit = drumKit;
	}
}
