import { state, messages } from '../constants';
import { intro } from './lib/intro';
import { stats } from './lib/stats';
import { userInput } from './lib/userInput';
import { goldOrMonster } from './lib/goldOrMonster';
import { updatePlayerPosition } from './lib/updatePlayerPosition';
import { updateStats } from './lib/updateStats';
import { finalScore } from './lib/finalScore';

const gameOfLife = async (input, output) => {

  let { lives, gold, position } = state;

  intro(output)

	while (lives > 0) {

    stats(output, lives, gold, position);

		try {
      const direction = await userInput(messages['instruction'], input, output);
      position = updatePlayerPosition(position, direction);
      const roomContains = await goldOrMonster(position);
      if (roomContains === 'MONSTER') {
        lives = updateStats(output, lives, true);
      } else {
        gold = updateStats(output, gold, false);
      };
		} catch (err) {
      output.write(err);
      continue;
    }
  }

  output.write(messages['gameOver']);
  finalScore(output, gold);

};

export default gameOfLife;
