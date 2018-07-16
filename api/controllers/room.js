import sample from 'lodash.sample';

import { difficulty } from '../../constants';

const roomContent = () => {
  return sample(difficulty);
}

const getRoomContent = async (req, res) => {
  try {
    const content = await roomContent();
    res.send(content);
  }
  catch (err) {
    res.send(err);
  }
}

export default getRoomContent;
