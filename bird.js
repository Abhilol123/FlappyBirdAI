class bird {
	constructor(brain) {
		this.x = 50;
		this.y = height / 2;
		this.velocity = 0;
		this.brain = brain;
		this.score = -190;
		this.fitness = 0;
		this.label = 0;
		this.dia = 30;
	}

	think(pipes) {
		let closest = null;
		let D1 = width * 2;
		for (let i = 0; i < pipes.length; i++) {
			let D2 = pipes[i].x - this.x + pipes[i].w + this.dia / 2;
			if (D2 > 0) {
				if (D1 > D2) {
					D1 = D2;
					closest = pipes[i]
				}
			}
		}

		let inputs = Matrix.fromArray([closest.x / width, (closest.y + closest.gap - this.y) / height, (this.y - closest.y) / height, this.velocity / 150])
		let output = this.brain.predict(inputs)
		return output
	}

	update(_G) {
		this.score = this.score + 1;
		this.velocity = this.velocity + _G;
		this.y = this.y + this.velocity;

		if (this.y > height) {
			this.y = height;
			this.velocity = 0;
		}

		if (this.y < 0) {
			this.y = 0;
			this.velocity = 0;
		}

		if (this.velocity > 15) {
			this.velocity = 15;
		}
	}

	jump() {
		this.velocity = -8;
		return 0
	}

	show() {
		ellipse(this.x, this.y, this.dia, this.dia);
	}
}
