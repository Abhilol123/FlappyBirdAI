// You can change to config to play around with parameters
let n = [];
let brain = [];
let total = 1000; // Total number of birds per generation.
let b = [];
let G = 0.5;
let time2 = 0;
let p = [];
let save = [];
let speed;
let counter = 0;
let generation = 0;

function setup() {
	createCanvas(640, 640);

	for (let i = 0; i < total; i++) {
		n.push(new NN(4, 2, 1, [8]));
		brain.push(NN_child.createChild(n[i]));
		b.push(new bird(brain[i]));
	}

	speed = createSlider(1, 100, 1)
}

function draw() {
	for (let s = 0; s < speed.value(); s++) {
		background(51);

		for (let i = p.length - 1; i >= 0; i--) {
			p[i].update();
			p[i].show();

			for (let n = b.length - 1; n >= 0; n--) {
				if (p[i].hits(b[n]) === 1) {
					save.push(b.splice(n, 1)[0]);
				}
			}

			if (p[i].x + p[i].w < 0) {
				p.splice(i, 1);
			}
		}

		if (counter > 190) {
			for (let i = b.length - 1; i >= 0; i--) {
				if (b[i].y === height) {
					save.push(b.splice(i, 1)[0]);
				}
			}
		}

		if (time2 % 80 === 0) {
			p.push(new pipe());
		}

		for (let n = 0; n < b.length; n++) {
			b[n].update(G);
			b[n].show();
			out = b[n].think(p);
			if (out.data[0][0] > out.data[1][0]) {
				b[n].jump();
			}
		}

		if (b.length === 0) {
			let blah = new Population(total, save);
			b = blah.nextGen();
			time2 = 0;
			p = []
			p.push(new pipe());
			save = [];
			counter = 0;
			generation++;
			console.log(generation)
		}

		time2 = time2 + 1;
		counter = counter + 1;
	}
}
