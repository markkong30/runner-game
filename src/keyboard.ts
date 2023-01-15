import { Game } from '.';
import { Key } from './types';

const keys: string[] = [];

export class KeyboardHandler {
	keys: Key[];
	game: Game;

	constructor(game: Game) {
		this.keys = [];
		this.game = game;
		window.addEventListener('keydown', (e) => {
			if (!keys.includes(e.key)) {
				this.keys.push(e.key as Key);
			}

			if (e.key === 'd') {
				this.game.debug = !this.game.debug;
			}
		});

		window.addEventListener('keyup', (e) => {
			this.keys = this.keys.filter((key) => key !== e.key);
		});
	}
}
