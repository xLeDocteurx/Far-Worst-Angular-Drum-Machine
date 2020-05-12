import * as posenet from '@tensorflow-models/posenet';
import { resolve } from 'url';
import { Reference } from '@angular/compiler/src/render3/r3_ast';

export function waitForNextFrame(): Promise<void> {
    return new Promise((resolve) => {
        requestAnimationFrame(() => {
            resolve()
        });
    });
}

export function dummyPromise(): Promise<void> {
    return new Promise((resolve) => {
        setTimeout(() => {resolve()}, 1000/10);
    });
}

export class Canvas {

    minConfidence: number = 0.75;

    canvas: HTMLCanvasElement;
    ctx: CanvasRenderingContext2D;

    fillColor: string = '#777777';
    strokeColor: string = '#000000';

    constructor(canvasRef) {
        this.canvas = canvasRef;
        this.ctx = canvasRef.getContext('2d');
    }

    set setFillColor(color: string) {
        this.fillColor = color
    }

    set setStrokeColor(color: string) {
        this.strokeColor = color
    }

    resize(width: number, height: number = width): void {
        this.canvas.width = width;
        this.canvas.height = height;
    }

    invert() {
        this.ctx.scale(-1, 1);
    }

    drawEverything(video: HTMLVideoElement, pose: posenet.Pose, audioElements: HTMLAudioElement[]): void {
        this.drawVideo(video);
        this.drawSkeleton(pose);
        this.drawKeyPoints(pose);
        this.drawAudioTargets(audioElements);
    }

    drawVideo(video: HTMLVideoElement): void {
        // this.ctx.save();
        // this.ctx.scale(-1, 1);
        // this.ctx.translate(-video.clientWidth, 0);
        this.ctx.drawImage(video, 0, 0, video.clientWidth, video.clientHeight);
        // this.drawVideo(video);
    }

    drawSkeleton(pose: posenet.Pose): void {
        const adjacentKeyPoints = posenet.getAdjacentKeyPoints(pose.keypoints, this.minConfidence);
        adjacentKeyPoints.forEach((keypoints) => {
            this.drawLine(keypoints[0].position.x, keypoints[0].position.y, keypoints[1].position.x, keypoints[1].position.y, '#00FF00');
        });
    }

    drawKeyPoints(pose: posenet.Pose): void {
        pose.keypoints.forEach((keypoint, keypointIndex) => {
            if(keypoint.score > this.minConfidence) {
            this.drawCircle(Math.round(keypoint.position.x), Math.round(keypoint.position.y), 5, '#00FF00');
                if(keypointIndex == 9 || keypointIndex == 10) {
                    this.drawCircle(Math.round(keypoint.position.x), Math.round(keypoint.position.y), 10, keypointIndex == 9 ? '#0000FF' : '#FF0000');
                }
            }
        })
    }

    drawAudioTargets(audioElements: HTMLAudioElement[]): void {
        const elementsPerSide = Math.ceil(audioElements.length / 3);
        const elementsRadius = this.canvas.height / (elementsPerSide + 2) / 2;

        audioElements.forEach((audioElement, audioElementIndex) => {
            // for(let i=0; i < 3; i++) {
            //     for(let j=0; j < elementsPerSide; j++) {
                    if(audioElementIndex < elementsPerSide) {
                        const x = elementsRadius;
                        const y = this.canvas.height - ((audioElementIndex + 0.5) * elementsRadius * 2 + elementsRadius * 2);
                        this.drawCircle(x, y, elementsRadius);
                    } else if(audioElementIndex < elementsPerSide * 2) {
                        const x = (audioElementIndex - elementsPerSide) * elementsRadius * 2;
                        const y = elementsRadius;
                        this.drawCircle(x, y, elementsRadius);
                    } else {
                        const x = this.canvas.width - elementsRadius;
                        const y = (audioElementIndex - elementsPerSide * 2) * elementsRadius * 2 + elementsRadius * 2;
                        this.drawCircle(x, y, elementsRadius);
                    }
            //     }
            // }
        })
    }

    drawLine(ax: number, ay: number, bx: number, by: number, 
        color: string = this.strokeColor, strokeWeight: number = 1): void {
        this.ctx.strokeStyle = color;
        this.ctx.moveTo(ax, ay);
        this.ctx.lineTo(bx, by);
        this.ctx.lineWidth = strokeWeight;
        this.ctx.stroke();
    }

    drawCircle(x: number, y: number, radius: number, 
        fillColor: string = this.fillColor, strokeColor: string = this.strokeColor): void {
        this.ctx.beginPath();
        this.ctx.arc(x, y, radius ? radius : 3, 0, 2 * Math.PI, false);
        this.ctx.fillStyle = fillColor;
        this.ctx.fill();
        this.ctx.lineWidth = 1;
        this.ctx.strokeStyle = strokeColor;
        this.ctx.stroke();
    }

    background(color: string = this.fillColor): void {
        this.ctx.fillStyle = color;
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        // this.ctx.fillRect(this.canvas.width, this.canvas.height, 0, 0);
    }
}
