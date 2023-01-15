import { Game } from '..';
import { Key, State, StateName } from '../types';
import { RootState } from './rootState';

export class Falling extends RootState {
	game: Game;

	constructor(game: Game) {
		super(StateName.FALLING, game);
		this.game = game;
	}

	enter() {
		this.game.player.frameY = 2;
		this.game.player.maxFrame = 6;
	}

	handleInput(input: Key[]) {
		if (this.game.player.onGround()) {
			this.game.player.setState(State.RUNNING, 1);
		}
	}
}
