import { Game } from './index';
import { Falling } from './playerStates/Falling';
import { Jumping } from './playerStates/Jumping';
import { Rolling } from './playerStates/Rolling';
import { Running } from './playerStates/Running';
import { Sitting } from './playerStates/Sitting';
import { Key, StateClass } from './types';

export class Player {
	game: Game;
	width: number;
	height: number;
	x: number;
	y: number;
	image: HTMLImageElement;
	frameX: number;
	frameY: number;
	maxFrame: number;
	fps: number;
	frameInterval: number;
	frameTimer: number;
	speed: number;
	maxSpeed: number;
	vy: number;
	gravity: number;
	states: StateClass[];
	currentState: StateClass;

	constructor(game: Game) {
		this.game = game;
		this.width = 100;
		this.height = 92;
		this.x = 0;
		this.y = this.game.height - this.height - this.game.margin;
		this.image = document.querySelector('#player') as HTMLImageElement;
		this.frameX = 0;
		this.frameY = 0;
		this.maxFrame = 5;
		this.fps = 20;
		this.frameInterval = 1000 / this.fps;
		this.frameTimer = 0;
		this.speed = 0;
		this.maxSpeed = 5;
		this.vy = 0;
		this.gravity = 1;
		this.states = [
			new Sitting(this.game),
			new Running(this.game),
			new Jumping(this.game),
			new Falling(this.game),
			new Rolling(this.game)
		];
	}

	update(input: Key[], deltaTime: number) {
		this.checkCollision();
		this.currentState.handleInput(input);

		// horizontal movement
		this.x += this.speed;
		if (input.includes('ArrowRight')) {
			this.speed = this.maxSpeed;
		} else if (input.includes('ArrowLeft')) {
			this.speed = -this.maxSpeed;
		} else {
			this.speed = 0;
		}

		if (this.x < 0) {
			this.x = 0;
		}

		if (this.x > this.game.width - this.width) {
			this.x = this.game.width - this.width;
		}

		// vertical movement
		this.y += this.vy;

		if (!this.onGround()) {
			this.vy += this.gravity;
		} else {
			this.vy = 0;
		}

		// sprite animation
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
	}

	draw(context: CanvasRenderingContext2D) {
		if (this.game.debug) {
			context.strokeRect(this.x, this.y, this.width, this.height);
		}

		context.drawImage(
			this.image,
			this.frameX * this.width,
			this.frameY * this.height,
			this.width,
			this.height,
			this.x,
			this.y,
			this.width,
			this.height
		);
	}

	onGround() {
		return this.y >= this.game.height - this.height - this.game.margin;
	}

	setState(state: number, speed: number) {
		this.currentState = this.states[state];
		this.game.speed = this.game.maxSpeed * speed;
		this.currentState.enter();
	}

	checkCollision() {
		this.game.enemies.forEach((enemy) => {
			if (
				enemy.x < this.x + this.width &&
				enemy.x + enemy.width > this.x &&
				enemy.y < this.y + this.height &&
				enemy.y + enemy.height > this.y
			) {
				enemy.shouldDelete = true;
				this.game.score++;
			}
		});
	}
}
