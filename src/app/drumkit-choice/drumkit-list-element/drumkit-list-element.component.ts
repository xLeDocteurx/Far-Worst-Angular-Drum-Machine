import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { DrumKit } from '../../drumkit'
import { DrumKitService } from '../../drum-kit.service'

@Component({
  selector: 'app-drumkit-list-element',
  templateUrl: './drumkit-list-element.component.html',
  styleUrls: ['./drumkit-list-element.component.css']
})
export class DrumkitListElementComponent implements OnInit {

	@Input() drumKit: DrumKit;

	constructor(private drumKitService: DrumKitService, private router: Router) {
	}

	ngOnInit() {
	}

	selectDrumKit(): void {
		this.drumKitService.setSelectedDrumKit(this.drumKit);
		this.router.navigateByUrl('/play');
	}
}
