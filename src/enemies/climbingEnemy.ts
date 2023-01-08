import { Game } from '..';
import { Enemy } from './enemy';

export class ClimbingEnemy extends Enemy {
	game: Game;
	width: number;
	height: number;
	x: number;
	y: number;
	speedX: number;
	speedY: number;
	maxFrame: number;
	image: HTMLImageElement;

	constructor(game: Game) {
		super();
		this.game = game;
		this.width = 120;
		this.height = 144;
		this.x = this.game.width;
		this.y = Math.random() * this.game.height * 0.5;
		this.speedX = 0;
		this.speedY = Math.random() > 0.5 ? 1 : -1;
		this.maxFrame = 5;
		this.image = document.querySelector('#enemy-spider') as HTMLImageElement;
	}

	update(deltaTime: number) {
		super.update(deltaTime);

		if (this.y > this.game.height - this.height - this.game.margin) {
			this.speedY *= -1;
		}

		if (this.y < -this.height) {
			this.shouldDelete = true;
		}
	}

	draw(context: CanvasRenderingContext2D) {
		super.draw(context);

		context.beginPath();
		context.moveTo(this.x + this.width / 2, 0);
		context.lineTo(this.x + this.width / 2, this.y + 50);
		context.stroke();
	}
}
