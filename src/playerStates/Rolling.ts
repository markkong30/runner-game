import { Game } from '..';
import { Key, State, StateName } from '../types';
import { RootState } from './rootState';

export class Rolling extends RootState {
	game: Game;

	constructor(game: Game) {
		super(StateName.ROLLING, game);
		this.game = game;
	}

	enter() {
		this.game.player.frameX = 0;
		this.game.player.frameY = 6;
		this.game.player.maxFrame = 6;
	}

	handleInput(input: Key[]) {
		if (!input.includes(' ') && this.game.player.onGround()) {
			this.game.player.setState(State.RUNNING, 1);
		} else if (!input.includes(' ') && !this.game.player.onGround()) {
			this.game.player.setState(State.FALLING, 1);
		} else if (
			input.includes(' ') &&
			input.includes('ArrowUp') &&
			this.game.player.onGround()
		) {
			this.game.player.vy -= 27;
		}
	}
}
