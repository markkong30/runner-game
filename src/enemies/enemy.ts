import { Game } from '..';

export class Enemy {
	frameX: number;
	frameY: number;
	fps: number;
	frameInterval: number;
	frameTimer: number;
	shouldDelete: boolean;

	//subclass
	game: Game;
	x: number;
	y: number;
	speedX: number;
	speedY: number;
	maxFrame: number;
	image: HTMLImageElement;
	width: number;
	height: number;

	constructor() {
		this.frameX = 0;
		this.frameY = 0;
		this.fps = 10;
		this.frameInterval = 1000 / this.fps;
		this.frameTimer = 0;
		this.shouldDelete = false;
	}

	update(deltaTime: number) {
		this.x -= this.speedX + this.game.speed;
		this.y += this.speedY;

		if (this.frameTimer > this.frameInterval) {
			this.frameTimer = 0;

			if (this.frameX < this.maxFrame) {
				this.frameX++;
			} else {
				this.frameX = 0;
			}
		} else {
			this.frameTimer += deltaTime;
		}

		if (this.x + this.width < 0) {
			this.shouldDelete = true;
		}
	}

	draw(context: CanvasRenderingContext2D) {
		if (this.game.debug) {
			context.strokeRect(this.x, this.y, this.width, this.height);
		}

		context.drawImage(
			this.image,
			this.frameX * this.width,
			0,
			this.width,
			this.height,
			this.x,
			this.y,
			this.width,
			this.height
		);
	}
}
