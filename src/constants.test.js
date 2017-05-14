/* eslint-env jest */

import * as constants from './constants';

describe('constants', () => {
  it('has ZOOPLA_API_HOSTNAME', () => {
    expect(constants.ZOOPLA_API_HOSTNAME).toBe('api.zoopla.co.uk');
  });

  it('has ZOOPLA_API_BASE_PATH', () => {
    expect(constants.ZOOPLA_API_BASE_PATH).toBe('/api/v1/');
  });

  it('has PROPERTY_LISTING_ENDPOINT', () => {
    expect(constants.PROPERTY_LISTING_ENDPOINT).toBe('property_listings.json');
  });
});
