import { Player } from '../player';
import { Key, State } from '../types';
import { RootState } from './rootState';

export class Running extends RootState {
	player: Player;

	constructor(player: Player) {
		super('RUNNING');
		this.player = player;
	}

	enter() {
		this.player.frameY = 3;
		this.player.maxFrame = 8;
	}

	handleInput(input: Key[]) {
		if (input.includes('ArrowDown')) {
			this.player.setState(State.SITTING);
		} else if (input.includes('ArrowUp')) {
			this.player.setState(State.JUMPING);
		}
	}
}
