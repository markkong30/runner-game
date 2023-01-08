import { Game } from '..';
import { Enemy } from './enemy';

export class FlyingEnemy extends Enemy {
	game: Game;
	width: number;
	height: number;
	x: number;
	y: number;
	speedX: number;
	speedY: number;
	maxFrame: number;
	image: HTMLImageElement;
	angle: number;
	va: number;

	constructor(game: Game) {
		super();
		this.game = game;
		this.width = 60;
		this.height = 44;
		this.x = this.game.width;
		this.y = Math.random() * this.game.height * 0.5;
		this.speedX = Math.random() + 1;
		this.speedY = 0;
		this.maxFrame = 5;
		this.image = document.querySelector('#enemy-fly') as HTMLImageElement;
		this.angle = 0;
		this.va = Math.random() * 0.1 + 0.1;
	}

	update(deltaTime: number) {
		super.update(deltaTime);

		this.angle += this.va;
		this.y += Math.sin(this.angle);
	}
}
