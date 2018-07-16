import { messages } from '../../constants';

export const updateStats = (output, stat, monster) => {
  if (monster) {
    output.write(messages['monster']);
    return stat -= 1;
  }
  output.write(messages['gold']);
  return stat += 1;
}
