import { Component, OnInit } from '@angular/core';

import { DrumKit } from '../drumkit'
import { DrumKitService } from '../drum-kit.service'

@Component({
  selector: 'app-drumkit-choice',
  templateUrl: './drumkit-choice.component.html',
  styleUrls: ['./drumkit-choice.component.css']
})
export class DrumkitChoiceComponent implements OnInit {

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

	sortByName(): void {
		this.filteredDrumKits.sort((a, b) => {
			if(a.name < b.name) { return -1; }
		    if(a.name > b.name) { return 1; }
		    return 0;
		})
	}

	sortByNameReverse(): void {
		this.filteredDrumKits.sort((a, b) => {
			if(a.name < b.name) { return 1; }
		    if(a.name > b.name) { return -1; }
		    return 0;
		})
	}

	sortByAuthor(): void {
		this.filteredDrumKits.sort((a, b) => {
			if(a.author < b.author) { return -1; }
		    if(a.author > b.author) { return 1; }
		    return 0;
		})
	}

	sortByAuthorReverse(): void {
		this.filteredDrumKits.sort((a, b) => {
			if(a.author < b.author) { return 1; }
		    if(a.author > b.author) { return -1; }
		    return 0;
		})
	}

	sortByNumberOfSamples(): void {
		this.filteredDrumKits.sort((a, b) => {
			return a.samples.length - b.samples.length
		})
	}

	sortByNumberOfSamplesReverse(): void {
		this.filteredDrumKits.sort((a, b) => {
			return b.samples.length - a.samples.length
		})
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
