import { Key } from './types';

const keys: string[] = [];

export class KeyboardHandler {
	keys: Key[];

	constructor() {
		this.keys = [];
		window.addEventListener('keydown', (e) => {
			if (!keys.includes(e.key)) {
				this.keys.push(e.key as Key);
			}
		});

		window.addEventListener('keyup', (e) => {
			this.keys = this.keys.filter((key) => key !== e.key);
		});
	}
}
