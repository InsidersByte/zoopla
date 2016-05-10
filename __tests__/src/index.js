/* eslint-env jest */

jest.unmock('../../src');

import Zoopla from '../../src';
import * as constants from '../../src/constants';
import HttpClient from '../../src/HttpClient';

const apiKey = 'apiKey';
const zoopla = new Zoopla({ apiKey });
const parameters = { parameter: 'value' };
const result = { message: 'I am the result' };

describe('Zoopla', () => {
    beforeEach(() => {
        HttpClient.get.mockClear();
        HttpClient.get.mockReturnValueOnce(result);
    });

    it('exists', () => {
        expect(Zoopla).toBeDefined();
    });

    it('creates zoopla properly', () => {
        expect(zoopla).toBeDefined();
        expect(zoopla.apiKey).toBe(apiKey);
    });

    describe('getPropertyListings', () => {
        it('calls HttpClient', () => {
            const response = zoopla.getPropertyListings(parameters);

            const url = `${constants.ZOOPLA_API_HOSTNAME}${constants.ZOOPLA_API_BASE_PATH}${constants.PROPERTY_LISTING_ENDPOINT}`;

            expect(HttpClient.get.mock.calls.length).toBe(1);
            expect(HttpClient.get).toBeCalledWith({ url, query: { ...parameters, api_key: apiKey } });

            expect(response).toBe(result);
        });
    });

    describe('getPropertyListingsById', () => {
        const id1 = 'id1';
        const id2 = 'id2';

        it('calls HttpClient', () => {
            const response = zoopla.getPropertyListingsById(id1, id2);

            const url = `${constants.ZOOPLA_API_HOSTNAME}${constants.ZOOPLA_API_BASE_PATH}${constants.PROPERTY_LISTING_ENDPOINT}`;

            expect(HttpClient.get.mock.calls.length).toBe(1);
            expect(HttpClient.get).toBeCalledWith({ url, query: { listing_id: [id1, id2], api_key: apiKey } });

            expect(response).toBe(result);
        });
    });
});
