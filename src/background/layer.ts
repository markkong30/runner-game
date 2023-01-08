import { Game } from '../index';

export class Layer {
	game: Game;
	width: number;
	height: number;
	speedModifer: number;
	image: HTMLImageElement;
	x: number;
	y: number;

	constructor(
		game: Game,
		width: number,
		height: number,
		speedModifer: number,
		image: HTMLImageElement
	) {
		this.game = game;
		this.width = width;
		this.height = height;
		this.speedModifer = speedModifer;
		this.image = image;
		this.x = 0;
		this.y = 0;
	}

	update() {
		if (this.x < -this.width) {
			this.x = 0;
		} else {
			this.x -= this.game.speed * this.speedModifer;
		}
	}

	draw(context: CanvasRenderingContext2D) {
		context.drawImage(this.image, this.x, this.y, this.width, this.height);
		context.drawImage(
			this.image,
			this.x + this.width,
			this.y,
			this.width,
			this.height
		);
	}
}
