import { Lines } from './../src/haiku.js';

describe('Lines', () => {

  test('it should identify that the poem has three lines', () => {
    expect(Lines()).toBe(3);
  });
});