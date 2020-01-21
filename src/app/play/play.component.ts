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

	p5;

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

		// this.p5 = new p5(this.sketch);

		this.video = await loadVideo(this.videoRef.nativeElement);

		this.canvas = new Canvas(this.canvasRef.nativeElement);
		this.prepareCanvas();
		this.network = await loadNeuralNetwork();

		this.ngZone.runOutsideAngular(async () => {
			// window.requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
	
			// window.requestAnimationFrame(this.evaluatePoseAndDraw);
			// requestAnimationFrame(this.evaluatePoseAndDraw());
			await this.evaluatePoseAndDraw();
			// setInterval(() => this.evaluatePoseAndDraw(), 500);
	
			// detectPoses(this.canvas, this.video, this.network);
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

	private sketch(p: any) {
		let containerWidth;
		let containerHeight;
		const minConfidence = 0.5;
		// const minConfidence = 0.25;

		let canvas;
		let capture;
	
		let poseNet;
		let pose;
	
		let setupDone = false;
		let loadedVideo = false;
	
		p.preload = () => {
			console.log('preload', p)
			capture = p.createCapture(p.VIDEO);
			capture.hide();
	
			capture.elt.onloadeddata = () => {
				console.log('video loaded');
				loadedVideo = true;
			}
		}
	
		p.setup = async () => {
			console.log('setup', p)

			// canvas = p.createCanvas(640, 480);
			canvas = p.createCanvas(0, 0);
			canvas.parent('canvas-container');

			resizeCanvas();
	
			p.text('ML model is loading...', p.width/2, p.height/2);
	
			poseNet = await posenet.load();
			
			console.log('model loaded');
			setupDone = true;

			// console.log('p.audioElements()', p.audioElements());
		}
	
		p.draw = async () => {

			if(setupDone && loadedVideo) {
				console.log('bouyaaaaaa')

				// p.noLoop();
				pose = await poseNet.estimateSinglePose(capture.elt, {
					flipHorizontal: false
				});
	
				// p.background(127, 0, 0);
	
				drawCamera();

				drawAudioElements();

				drawKeyPoints();
				drawSkeleton();
			}
		}
	
		function drawCamera() {
			p.image(capture, 0, 0, p.width, p.height);
		}

		function drawAudioElements() {
			
		}
	
		function drawKeyPoints() {
			pose.keypoints.forEach((keypoint, keypointIndex) => {
				if(keypoint.score > minConfidence) {
					p.stroke(20);
					p.strokeWeight(2);
					p.fill(255);
					p.ellipse(Math.round(keypoint.position.x), Math.round(keypoint.position.y), 8, 8);
					if(keypointIndex == 9 || keypointIndex == 10) {
						p.fill(0, 0, 255);
						p.ellipse(Math.round(keypoint.position.x), Math.round(keypoint.position.y), 25, 25);
					}
				}
			})
		}
	
		function drawSkeleton() {
			const adjacentKeyPoints = posenet.getAdjacentKeyPoints(pose.keypoints, minConfidence);
			adjacentKeyPoints.forEach((keypoints) => {
				p.stroke(0, 255, 0);
				p.line(keypoints[0].position.x, keypoints[0].position.y, keypoints[1].position.x, keypoints[1].position.y);
			});
		}
	
		function resizeCanvas() {
			containerWidth = canvas.parent().clientWidth;
			containerHeight = canvas.parent().clientHeight;
			
			capture.size(containerWidth, containerHeight * containerHeight / containerWidth);
			p.resizeCanvas(containerWidth, containerHeight * containerHeight / containerWidth);
			// p.resizeCanvas(640, 480);
		}
		p.windowResized = function() {
			// resizeCanvas();
		}
	}

}
