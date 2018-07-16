import { createInterface } from 'readline';
import includes from 'lodash.includes';

import { messages, validDirections } from '../../constants';

export const userInput = async (instruction, input, output) => {
	const read = createInterface({ input, output });
	return new Promise((resolve, reject) => {
		read.question(instruction, (answer) => {
      const formatted = answer.toLowerCase();
      if (!validDirections.includes(formatted)) {
        reject(messages['fail']);
      } else {
        resolve(answer);
      }
			read.close();
		});
	});
};
