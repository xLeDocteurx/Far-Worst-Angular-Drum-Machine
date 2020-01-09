import { Component, OnInit } from '@angular/core';

import { DRUMKITS, DrumKit } from '../drumkit'

@Component({
  selector: 'app-drumkit-choice',
  templateUrl: './drumkit-choice.component.html',
  styleUrls: ['./drumkit-choice.component.css']
})
export class DrumkitChoiceComponent implements OnInit {

	drumKits = DRUMKITS;
	filteredDrumKits: DrumKit[];
	filterInput: string;

	constructor() {
		this.filteredDrumKits = [];
		this.filterInput = '';
	}

	ngOnInit() {
	}

	onFilterInputChange(input) {
		this.filteredDrumKits = this.filterDrumKits()
	}

	resetFilter() {
		this.filterInput = '';
	}

	filterDrumKits() {
		return this.drumKits.filter((drumKit, drumKit_Index) => {
			return drumKit.name.toLowerCase().includes(this.filterInput.toLowerCase()) || drumKit.author.toLowerCase().includes(this.filterInput.toLowerCase())
		})
	}

}
