import { Component, Input, OnInit } from '@angular/core';

import { DRUMKITS, DrumKit } from '../../drumkit'

@Component({
  selector: 'app-drumkit-list-element',
  templateUrl: './drumkit-list-element.component.html',
  styleUrls: ['./drumkit-list-element.component.css']
})
export class DrumkitListElementComponent implements OnInit {

	@Input() drumKit: DrumKit;

	constructor() {
	}

	ngOnInit() {
	}
}
