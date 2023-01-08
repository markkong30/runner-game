import { Background } from './background/background';
import { KeyboardHandler } from './keyboard';
import { Player } from './player';

const canvas = document.querySelector<HTMLCanvasElement>(
	'#canvas-1'
) as HTMLCanvasElement;
const ctx = canvas?.getContext('2d') as CanvasRenderingContext2D;
canvas.width = 500;
canvas.height = 500;

export class Game {
	width: number;
	height: number;
	margin: number;
	speed: number;
	background: Background;
	player: Player;
	input: KeyboardHandler;

	constructor(width: number, height: number) {
		this.width = width;
		this.height = height;
		this.margin = 50;
		this.speed = 1;
		this.background = new Background(this);
		this.player = new Player(this);
		this.input = new KeyboardHandler();
	}

	update(deltaTime: number) {
		this.background.update();
		this.player.update(this.input.keys, deltaTime);
	}

	draw(context: CanvasRenderingContext2D) {
		this.background.draw(context);
		this.player.draw(context);
	}
}

const game = new Game(canvas.width, canvas.height);

let lastTime = 0;

const animate = (timeStamp: number) => {
	const deltaTime = timeStamp - lastTime;
	lastTime = timeStamp;

	ctx.clearRect(0, 0, canvas.width, canvas.height);
	game.update(deltaTime);
	game.draw(ctx);
	requestAnimationFrame(animate);
};

animate(0);
