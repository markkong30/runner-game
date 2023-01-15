import { Game } from '..';
import { StateName } from '../types';

export class RootState {
	state: StateName;
	game: Game;

	constructor(state: StateName, game: Game) {
		this.state = state;
		this.game = game;
	}
}
