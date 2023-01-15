import { Game } from '..';
import { Particle } from './particle';

export class Dust extends Particle {
	game: Game;
	x: number;
	y: number;
	color: string;

	constructor(game: Game, x: number, y: number) {
		super(game);
		this.size = Math.random() * 10 + 10;
		this.x = x;
		this.y = y;
		this.speedX = Math.random();
		this.speedY = Math.random();
		this.color = 'rgba(0, 0, 0, 0.2)';
	}

	draw(context: CanvasRenderingContext2D) {
		context.beginPath();
		context.arc(this.x, this.y, this.size, 0, Math.PI * 2);
		context.fillStyle = this.color;
		context.fill();
	}
}
