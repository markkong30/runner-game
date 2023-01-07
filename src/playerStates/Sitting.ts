import { Player } from '../player';
import { Key, State } from '../types';
import { RootState } from './rootState';

export class Sitting extends RootState {
	player: Player;

	constructor(player: Player) {
		super('SITTING');
		this.player = player;
	}

	enter() {
		this.player.frameY = 5;
		this.player.maxFrame = 4;
	}

	handleInput(input: Key[]) {
		if (input.includes('ArrowLeft') || input.includes('ArrowRight')) {
			this.player.setState(State.RUNNING);
		} else if (input.includes('ArrowUp')) {
			this.player.setState(State.JUMPING);
		}
	}
}
