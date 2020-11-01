const sharp = require("sharp");
const path = require("path");

const folder = "static";

const CANVAS = 32;
const DENSITY = 72;

const sizes = [16, 32, 64, 128, 192, 256, 512];

sizes.map((size) => {
	const file = `notebook-${size}.png`;
	sharp(path.resolve(folder, "favicon.svg"), {
		density: DENSITY * (size / CANVAS),
	})
		.toFile(path.resolve(folder, file))
		.then((info) => {
			console.log(`${file} - ${info.size} bits`);
		})
		.catch((err) => {
			if (err) console.log("Something went wrong", err);
		});
});
