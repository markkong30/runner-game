import { Background } from './background/background';
import { ClimbingEnemy } from './enemies/climbingEnemy';
import { Enemy } from './enemies/enemy';
import { FlyingEnemy } from './enemies/flyingEnemy';
import { GroundEnemy } from './enemies/groundEnemy';
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
	maxSpeed: number;
	background: Background;
	player: Player;
	input: KeyboardHandler;
	enemies: Enemy[];
	enemyTimer: number;
	enemyInterval: number;

	constructor(width: number, height: number) {
		this.width = width;
		this.height = height;
		this.margin = 80;
		this.speed = 0;
		this.maxSpeed = 2;
		this.background = new Background(this);
		this.player = new Player(this);
		this.input = new KeyboardHandler();
		this.enemies = [];
		this.enemyTimer = 0;
		this.enemyInterval = 1000;
	}

	update(deltaTime: number) {
		this.background.update();
		this.player.update(this.input.keys, deltaTime);

		if (this.enemyTimer > this.enemyInterval) {
			this.createEnemy();
			this.enemyTimer = 0;
		} else {
			this.enemyTimer += deltaTime;
		}

		this.enemies.forEach((enemy) => {
			enemy.update(deltaTime);
			this.enemies = this.enemies.filter((enemy) => !enemy.shouldDelete);
		});
	}

	draw(context: CanvasRenderingContext2D) {
		this.background.draw(context);
		this.player.draw(context);
		this.enemies.forEach((enemy) => {
			enemy.draw(context);
		});
	}

	createEnemy() {
		this.enemies.push(new FlyingEnemy(this));

		if (this.speed > 0 && Math.random() > 0.5) {
			this.enemies.push(new GroundEnemy(this));
		} else if (this.speed > 0) {
			this.enemies.push(new ClimbingEnemy(this));
		}
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
