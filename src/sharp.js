import sharp from "sharp";
import path from "path";

const folder = "static";

const CANVAS = 32;
const DENSITY = 72;

const sizes = [32, 192, 512];

sizes.map((size) =>
	sharp(path.resolve(folder, "favicon.svg"), {
		density: DENSITY * (size / CANVAS),
	})
		.resize(size, size)
		.toFile(path.resolve(folder, `notebook-${size}.png`), function (err) {
			if (err) console.log("Something went wrong", err);
		})
);
