import { Injectable } from '@angular/core';

import { DrumKit, DRUMKITS } from './drumkit'

@Injectable({
  providedIn: 'root'
})
export class DrumKitService {

	selectedDrumKit: DrumKit = null;

	constructor() { }

  	getDrumKits(): Array<DrumKit> {
		return DRUMKITS;
	}

	get getSelectedDrumKit(): DrumKit {
		return this.selectedDrumKit;
	}

	set setSelectedDrumKit(drumKit) {
		this.selectedDrumKit = drumKit;
	}
}
