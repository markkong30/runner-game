import { Game } from '..';
import { Key, State, StateName } from '../types';
import { RootState } from './rootState';

export class Running extends RootState {
	game: Game;

	constructor(game: Game) {
		super(StateName.RUNNING, game);
		this.game = game;
	}

	enter() {
		this.game.player.frameY = 3;
		this.game.player.maxFrame = 8;
	}

	handleInput(input: Key[]) {
		if (input.includes('ArrowDown')) {
			this.game.player.setState(State.SITTING, 0);
		} else if (input.includes('ArrowUp')) {
			this.game.player.setState(State.JUMPING, 1);
		} else if (input.includes(' ')) {
			this.game.player.setState(State.ROLLING, 2);
		}
	}
}
