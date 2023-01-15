import { Game } from '..';
import { Key, State, StateName } from '../types';
import { RootState } from './rootState';

export class Jumping extends RootState {
	game: Game;

	constructor(game: Game) {
		super(StateName.JUMPING, game);
		this.game = game;
	}

	enter() {
		this.game.player.frameY = 1;
		this.game.player.maxFrame = 6;

		if (this.game.player.onGround()) {
			this.game.player.vy -= 25;
		}
	}

	handleInput(input: Key[]) {
		if (this.game.player.vy > this.game.player.gravity) {
			this.game.player.setState(State.FALLING, 1);
		} else if (input.includes(' ')) {
			this.game.player.setState(State.ROLLING, 2);
		}
	}
}
