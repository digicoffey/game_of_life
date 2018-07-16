import axios from 'axios';

import { API_URL } from '../../constants';

export const goldOrMonster = async (position) => {
  const config = {
    headers: {
      'Content-Type': 'text/plain'
    },
    responseType: 'text'
  };
  try {
    const room = await axios.get(`${API_URL}/${position[0]}/${position[1]}`, config);
    return room.data;
  }
  catch (err) {
    console.log(err);
  }
}
