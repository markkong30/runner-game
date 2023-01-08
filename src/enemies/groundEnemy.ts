import { Game } from '..';
import { Enemy } from './enemy';

export class GroundEnemy extends Enemy {
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
		this.width = 60;
		this.height = 87;
		this.x = this.game.width;
		this.y = this.game.height - this.height - this.game.margin;
		this.speedX = 0;
		this.speedY = 0;
		this.maxFrame = 1;
		this.image = document.querySelector('#enemy-plant') as HTMLImageElement;
	}
}
