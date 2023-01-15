import { Falling } from './playerStates/Falling';
import { Jumping } from './playerStates/Jumping';
import { Rolling } from './playerStates/Rolling';
import { Running } from './playerStates/Running';
import { Sitting } from './playerStates/Sitting';

export type Key = 'ArrowDown' | 'ArrowUp' | 'ArrowLeft' | 'ArrowRight' | ' ';

export enum State {
	SITTING,
	RUNNING,
	JUMPING,
	FALLING,
	ROLLING,
	DIVING,
	HITTING
}

export type StateClass = Sitting | Running | Jumping | Falling | Rolling;

export enum StateName {
	SITTING = 'SITTING',
	RUNNING = 'RUNNING',
	JUMPING = 'JUMPING',
	FALLING = 'FALLING',
	ROLLING = 'ROLLING',
	DIVING = 'DIVING',
	HITTING = 'HITTING'
}
