import * as posenet from '@tensorflow-models/posenet';

export class Canvas {

    minConfidence: 0.5;

    canvas: any;
    ctx: any;

    fillColor: string;
    strokeColor: string;

    constructor(canvasRef) {
        this.canvas = canvasRef;
        this.ctx = canvasRef.getContext('2d');

        this.strokeColor = '#000000';
        this.fillColor = '#777777';
    }

    set setFillColor(color: string) {
        this.fillColor = color
    }

    set setStrokeColor(color: string) {
        this.strokeColor = color
    }

    resize(width: number, height: number = width) {
        this.canvas.width = width;
        this.canvas.height = height;
    }

    drawVideo(video) {
        // this.ctx.save();
        // this.ctx.scale(-1, 1);
        // this.ctx.translate(-video.width, 0);
        this.ctx.drawImage(video, 0, 0, video.clientWidth, video.clientHeight);
        // this.drawVideo(video);
    }

    drawKeyPoints(pose) {
        pose.keypoints.forEach((keypoint, keypointIndex) => {
            if(keypoint.score > this.minConfidence) {
                this.drawCircle(Math.round(keypoint.position.x), Math.round(keypoint.position.y), 5);
                if(keypointIndex == 9 || keypointIndex == 10) {
                    this.drawCircle(Math.round(keypoint.position.x), Math.round(keypoint.position.y), 25, '#0000FF');
                }
            }
        })
    }

    drawSkeleton(pose) {
        const adjacentKeyPoints = posenet.getAdjacentKeyPoints(pose.keypoints, this.minConfidence);
        adjacentKeyPoints.forEach((keypoints) => {
            this.drawLine(keypoints[0].position.x, keypoints[0].position.y, keypoints[1].position.x, keypoints[1].position.y, '#00FF00');
        });
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
        fillColor: string = this.fillColor, strokeColor: string = this.strokeColor) {
        this.ctx.beginPath();
        this.ctx.arc(x, y, radius ? radius : 3, 0, 2 * Math.PI, false);
        this.ctx.fillStyle = fillColor;
        this.ctx.fill();
        this.ctx.lineWidth = 1;
        this.ctx.strokeStyle = strokeColor;
        this.ctx.stroke();
    }

    background(color: string = this.fillColor) {
        this.ctx.fillStyle = color;
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    }

}