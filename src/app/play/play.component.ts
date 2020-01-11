import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// import p5 from 'p5';

import { DrumKit } from '../drumkit'
import { DrumKitService } from '../drum-kit.service'

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.css']
})
export class PlayComponent implements OnInit {

	selectedDrumKit: DrumKit;

	audioElements = []

	p5;

  	constructor(private drumKitService: DrumKitService, private router: Router) {
  	}

  	goToChooseDrumKit(): void {
		this.router.navigateByUrl('/choose-kit')
  	}

	ngOnInit() {
		this.selectedDrumKit = this.drumKitService.getSelectedDrumKit()
		if(this.selectedDrumKit)
			this.loadDrumKit();
	}

	loadDrumKit(): void {
		this.audioElements = this.selectedDrumKit.samples.map((sample) => {
			return new Audio(sample.path);
		})
	}

	playAudioElement(index): void {
		this.stopAudioElement(index)
		this.audioElements[index].play()
	}

	stopAudioElement(index): void {
		this.audioElements[index].pause();
	    this.audioElements[index].currentTime = 0;
	}

	/* private createCanvas() {
	  	this.p5 = new p5(this.sketch);
	}

	private sketch(p: any) {
		let canvas;

		p.setup = () => {
		    canvas = p.createCanvas(0, 0);
		    canvas.parent('canvas-container');
		    resizeCanvas();
		}

		p.draw = () => {
		    p.background(127);
		    // p.fill(0);
		    // p.rect(p.width / 2, p.height / 2, 50, 50);
		}

	    function resizeCanvas() {
	        const parentWidth = canvas.parent().clientWidth;
	        const parentHeight = canvas.parent().clientHeight;
	        p.resizeCanvas(parentWidth, parentHeight);
	    }
	    p.windowResized = function() {
	        resizeCanvas();
	    }
	} */

}
