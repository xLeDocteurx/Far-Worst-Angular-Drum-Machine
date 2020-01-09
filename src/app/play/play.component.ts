import { Component, OnInit } from '@angular/core';

import p5 from 'p5';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.css']
})
export class PlayComponent implements OnInit {

	p5;

  	constructor() { }

	ngOnInit() {
	  	this.createCanvas();
	}

	private createCanvas() {
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
	}

}
