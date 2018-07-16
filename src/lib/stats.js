export const stats = (output, lives, gold, position) => {
  output.write(`\nLives: ${lives}`);
  output.write(`\nGold: ${gold}`);
	output.write(`\nRoom Coords: ${position}\n`);
};
