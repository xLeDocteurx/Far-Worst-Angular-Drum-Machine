import { Component, OnInit } from '@angular/core';

import { DrumKit } from '../drumkit'
import { DrumKitService } from '../drum-kit.service'

import { OrderOptions } from './order-enum'

@Component({
  selector: 'app-drumkit-choice',
  templateUrl: './drumkit-choice.component.html',
  styleUrls: ['./drumkit-choice.component.css']
})

export class DrumkitChoiceComponent implements OnInit {
	
	order: OrderOptions = OrderOptions.name;

	drumKits: DrumKit[];
	filteredDrumKits: DrumKit[];
	filterInput: string;

	constructor(private drumKitService: DrumKitService) {
	}

	ngOnInit() {
		this.getDrumKits()
	}

	getDrumKits(): void {
		this.drumKits = this.drumKitService.getDrumKits()
		this.filteredDrumKits = this.drumKits;
		this.filterInput = '';
	}

	isButtonDisabled(input) {
		return this.order == OrderOptions[input] ? true : false
	}

	sortByName(): void {
		this.filteredDrumKits.sort((a, b) => {
			if(a.name < b.name) { return -1; }
		    if(a.name > b.name) { return 1; }
		    return 0;
		})
		this.order = OrderOptions.name;
	}

	sortByNameReverse(): void {
		this.filteredDrumKits.sort((a, b) => {
			if(a.name < b.name) { return 1; }
		    if(a.name > b.name) { return -1; }
		    return 0;
		})
		this.order = OrderOptions.nameReverse;
	}

	sortByAuthor(): void {
		this.filteredDrumKits.sort((a, b) => {
			if(a.author < b.author) { return -1; }
		    if(a.author > b.author) { return 1; }
		    return 0;
		})
		this.order = OrderOptions.author;
	}

	sortByAuthorReverse(): void {
		this.filteredDrumKits.sort((a, b) => {
			if(a.author < b.author) { return 1; }
		    if(a.author > b.author) { return -1; }
		    return 0;
		})
		this.order = OrderOptions.authorReverse;
	}

	sortByNumberOfSamples(): void {
		this.filteredDrumKits.sort((a, b) => {
			return a.samples.length - b.samples.length
		})
		this.order = OrderOptions.numberOfSamples;
	}

	sortByNumberOfSamplesReverse(): void {
		this.filteredDrumKits.sort((a, b) => {
			return b.samples.length - a.samples.length
		})
		this.order = OrderOptions.numberOfSamplesReverse;
	}

	onFilterInputChange(): void {
		this.filteredDrumKits = this.filterDrumKits()
	}

	resetFilter(): void {
		this.filterInput = '';
		this.filteredDrumKits = this.drumKits;
	}

	filterDrumKits() {
		return this.drumKits.filter((drumKit, drumKit_Index) => {
			return drumKit.name.toLowerCase().includes(this.filterInput.toLowerCase()) || drumKit.author.toLowerCase().includes(this.filterInput.toLowerCase())
		})
	}

}
