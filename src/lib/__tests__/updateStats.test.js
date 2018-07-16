import { updateStats } from '../updateStats';
const output = {
  write: jest.fn()
}
describe('updateStats()', () => {
  it('decrements lives stat when monster', () => {
    expect(updateStats(output, 5, true)).toEqual(4);
    expect(updateStats(output, 3, true)).toEqual(2);
    expect(updateStats(output, 2, true)).toEqual(1);
  });
  it('increments gold stat when not monster', () => {
    expect(updateStats(output, 5, false)).toEqual(6);
    expect(updateStats(output, 3, false)).toEqual(4);
    expect(updateStats(output, 12, false)).toEqual(13);
  });
});