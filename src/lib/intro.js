import { messages } from '../../constants';

export const intro = (output) => {
  output.write(messages['gameTitle']);
  output.write(messages['gameInstructions']);
}
