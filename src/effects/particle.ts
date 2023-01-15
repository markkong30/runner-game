import { Game } from '..';

export class Particle {
	game: Game;
	shouldDelete: boolean;

	// subclass
	x: number;
	y: number;
	speedX: number;
	speedY: number;
	size: number;

	constructor(game: Game) {
		this.game = game;
		this.shouldDelete = false;
	}

	update() {
		this.x -= this.speedX + this.game.speed;
		this.y -= this.speedY;
		this.size *= 0.95;

		if (this.size < 0.5) {
			this.shouldDelete = true;
		}
	}
}
