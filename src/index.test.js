/* eslint-env jest */

import index from './';
import Zoopla from './Zoopla';

describe('index', () => {
  it('equals Zoopla', () => {
    expect(index).toBe(Zoopla);
  });
});
