import { updatePlayerPosition } from '../updatePlayerPosition';
import { validDirections } from '../../../constants';

describe('updatePlayerPosition()', () => {
  it('updates player position coords when instructed to go north', () => {
    expect(updatePlayerPosition([0, 0], validDirections[0])).toEqual([0, 1]);
    expect(updatePlayerPosition([3, -8], validDirections[0])).toEqual([3, -7]);
    expect(updatePlayerPosition([-4, 11], validDirections[0])).toEqual([-4, 12]);
  });
  it('updates player position coords when instructed to go south', () => {
    expect(updatePlayerPosition([0, 0], validDirections[1])).toEqual([0, -1]);
    expect(updatePlayerPosition([12, 3], validDirections[1])).toEqual([12, 2]);
    expect(updatePlayerPosition([-6, -9], validDirections[1])).toEqual([-6, -10]);
  });
  it('updates player position coords when instructed to go east', () => {
    expect(updatePlayerPosition([0, 0], validDirections[2])).toEqual([1, 0]);
    expect(updatePlayerPosition([3, -3], validDirections[2])).toEqual([4, -3]);
    expect(updatePlayerPosition([-7, 2], validDirections[2])).toEqual([-6, 2]);
  });
  it('updates player position coords when instructed to go west', () => {
    expect(updatePlayerPosition([0, 0], validDirections[3])).toEqual([-1, 0]);
    expect(updatePlayerPosition([8, -2], validDirections[3])).toEqual([7, -2]);
    expect(updatePlayerPosition([-4, 8], validDirections[3])).toEqual([-5, 8]);
  });
  it('returns current player position coords when given invalid direction', () => {
    expect(updatePlayerPosition([0, 0], 'invalid')).toEqual([0, 0]);
	});
});