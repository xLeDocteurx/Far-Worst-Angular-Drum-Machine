import { Component, Input, OnInit, ViewChild, ElementRef, NgZone } from '@angular/core';
import { Router } from '@angular/router';

import * as posenet from '@tensorflow-models/posenet';
import { Canvas } from './Canvas';
import { loadVideo } from './camera.utils';
import { loadNeuralNetwork, detectPose } from './ml.utils';

import { DrumKit } from '../drumkit';
import { DrumKitService } from '../drum-kit.service';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.css']
})
export class PlayComponent implements OnInit {

	selectedDrumKit: DrumKit;
	audioElements = [];

	@ViewChild('myCanvas', {static: true}) canvasRef: ElementRef<HTMLCanvasElement>;
	canvas: Canvas;
	@ViewChild('myVideo', {static: true}) videoRef: ElementRef<HTMLVideoElement>;
	video;
	network;
	pose;

  	constructor(private ngZone: NgZone, private drumKitService: DrumKitService, private router: Router) {
  	}

	async ngOnInit() {

		this.selectedDrumKit = this.drumKitService.getSelectedDrumKit
		if(this.selectedDrumKit) {
			this.audioElements = await this.loadDrumKit();
		}

		this.video = await loadVideo(this.videoRef.nativeElement);

		this.canvas = new Canvas(this.canvasRef.nativeElement);
		this.prepareCanvas();
		this.network = await loadNeuralNetwork();

		this.ngZone.runOutsideAngular(async () => {
			// window.requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
	
			await this.evaluatePoseAndDraw();
			// setInterval(() => this.evaluatePoseAndDraw(), 500);
		})
	}

	goToChooseDrumKit(): void {
		this.router.navigateByUrl('/choose-kit');
	}

	// private async loadDrumKit(): Promise<Array<Promise<HTMLAudioElement>>> {
	private async loadDrumKit() {

		return Promise.all(this.selectedDrumKit.samples.map((sample) => {
			return new Promise((resolve) => {
				const audio = new Audio(sample.path);
				audio.oncanplaythrough = (event) => {
					resolve(audio);
				};
			});
		}))

	}

	playAudioElement(index): void {
		this.stopAudioElement(index)
		this.audioElements[index].play()
	}

	stopAudioElement(index): void {
		this.audioElements[index].pause();
	    this.audioElements[index].currentTime = 0;
	}

	private prepareCanvas(): void {
		this.canvas.resize(this.video.clientWidth, this.video.clientHeight);
		this.canvas.background();
		this.canvas.drawLine(0, 0, this.canvasRef.nativeElement.width, this.canvasRef.nativeElement.height);
		this.canvas.drawCircle(this.canvasRef.nativeElement.width/2, this.canvasRef.nativeElement.height/2, 10);
	}

	private async evaluatePoseAndDraw(): Promise<void> {
		this.canvas.drawVideo(this.video);
		// this.pose = await detectPose(this.network, this.video);
		// this.canvas.drawKeyPoints(this.pose);
		// this.canvas.drawSkeleton(this.pose);

		requestAnimationFrame(this.evaluatePoseAndDraw);
	}

}
