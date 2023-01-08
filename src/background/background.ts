import { Game } from '..';
import { Layer } from './layer';

export class Background {
	game: Game;
	width: number;
	height: number;
	layer1Image: HTMLImageElement;
	layer2Image: HTMLImageElement;
	layer3Image: HTMLImageElement;
	layer4Image: HTMLImageElement;
	layer5Image: HTMLImageElement;
	layer1: Layer;
	layer2: Layer;
	layer3: Layer;
	layer4: Layer;
	layer5: Layer;
	backgroundLayers: Layer[];

	constructor(game: Game) {
		this.game = game;
		this.width = 1667;
		this.height = 500;
		this.layer1Image = document.querySelector('#city-1') as HTMLImageElement;
		this.layer2Image = document.querySelector('#city-2') as HTMLImageElement;
		this.layer3Image = document.querySelector('#city-3') as HTMLImageElement;
		this.layer4Image = document.querySelector('#city-4') as HTMLImageElement;
		this.layer5Image = document.querySelector('#city-5') as HTMLImageElement;
		this.layer1 = new Layer(
			this.game,
			this.width,
			this.height,
			0,
			this.layer1Image
		);
		this.layer2 = new Layer(
			this.game,
			this.width,
			this.height,
			0.2,
			this.layer2Image
		);
		this.layer3 = new Layer(
			this.game,
			this.width,
			this.height,
			0.4,
			this.layer3Image
		);
		this.layer4 = new Layer(
			this.game,
			this.width,
			this.height,
			0.8,
			this.layer4Image
		);
		this.layer5 = new Layer(
			this.game,
			this.width,
			this.height,
			2,
			this.layer5Image
		);
		this.backgroundLayers = [
			this.layer1,
			this.layer2,
			this.layer3,
			this.layer4,
			this.layer5
		];
	}

	update() {
		this.backgroundLayers.forEach((layer) => {
			layer.update();
		});
	}

	draw(context: CanvasRenderingContext2D) {
		this.backgroundLayers.forEach((layer) => {
			layer.draw(context);
		});
	}
}
