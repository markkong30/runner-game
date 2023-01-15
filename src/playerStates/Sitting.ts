import { Game } from '..';
import { Key, State, StateName } from '../types';
import { RootState } from './rootState';

export class Sitting extends RootState {
	game: Game;

	constructor(game: Game) {
		super(StateName.SITTING, game);
		this.game = game;
	}

	enter() {
		this.game.player.frameY = 5;
		this.game.player.maxFrame = 4;
	}

	handleInput(input: Key[]) {
		if (input.includes('ArrowLeft') || input.includes('ArrowRight')) {
			this.game.player.setState(State.RUNNING, 1);
		} else if (input.includes(' ')) {
			this.game.player.setState(State.ROLLING, 2);
		}
	}
}
