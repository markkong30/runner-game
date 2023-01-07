import { Running } from './playerStates/Running';
import { Sitting } from './playerStates/Sitting';

export type Key = 'ArrowDown' | 'ArrowUp' | 'ArrowLeft' | 'ArrowRight';

export enum State {
	SITTING,
	RUNNING,
	JUMPING,
	FALLING
}

export type StateClass = Sitting | Running;
