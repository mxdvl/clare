import sharp from "sharp";
import { resolve } from "path";

const folder = "static";

const CANVAS = 32;
const DENSITY = 72;

const sizes = [16, 32, 64, 128, 180, 192, 256, 512];

for (const size of sizes) {
	const file = `notebook-${size}.png`;
	try {
		const { size: bits } = await sharp(resolve(folder, "favicon.svg"), {
			density: DENSITY * (size / CANVAS),
		})
			.toFile(resolve(folder, file))
		console.info(`${file} - ${bits} bits`);
	} catch (error) {
		console.warn("Something went wrong", error);
	}
}
