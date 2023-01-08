import { Player } from '../player';
import { Key, State } from '../types';
import { RootState } from './rootState';

export class Falling extends RootState {
	player: Player;

	constructor(player: Player) {
		super('FALLING');
		this.player = player;
	}

	enter() {
		this.player.frameY = 2;
		this.player.maxFrame = 6;
	}

	handleInput(input: Key[]) {
		if (this.player.onGround()) {
			this.player.setState(State.RUNNING, 1);
		}
	}
}
