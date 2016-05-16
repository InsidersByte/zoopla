/* eslint-env jest */

jest.unmock('../../src');

import index from '../../src';
import Zoopla from '../../src/Zoopla';

describe('index', () => {
    it('equals Zoopla', () => {
        expect(index).toBe(Zoopla);
    });
});
