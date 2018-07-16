import mockAxios from 'axios';
import { goldOrMonster } from '../goldOrMonster';

describe('goldOrMonster()', () => {
	it('takes position coords and returns a string', async () => {
    mockAxios.get.mockImplementationOnce(() => {
      return Promise.resolve({
        data: 'MONSTER'
      })
    });

    const roomContains = await goldOrMonster([19,-2]);
    expect(roomContains).toEqual("MONSTER" );
    expect(mockAxios.get).toHaveBeenCalledTimes(1);
    expect(mockAxios.get).toHaveBeenCalledWith("http://localhost:8080/room/19/-2", {
      headers: {
        'Content-Type': 'text/plain'
      },
      responseType: 'text'
    });
	});
});
