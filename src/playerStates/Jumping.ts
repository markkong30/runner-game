import { Player } from '../player';
import { Key, State } from '../types';
import { RootState } from './rootState';

export class Jumping extends RootState {
	player: Player;

	constructor(player: Player) {
		super('JUMPING');
		this.player = player;
	}

	enter() {
		this.player.frameY = 1;
		this.player.maxFrame = 6;

		if (this.player.onGround()) {
			this.player.vy -= 25;
		}
	}

	handleInput(input: Key[]) {
		if (this.player.vy > this.player.gravity) {
			this.player.setState(State.FALLING);
		}
	}
}
