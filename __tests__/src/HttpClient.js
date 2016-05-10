/* eslint-env jest */

jest.unmock('../../src/HttpClient');

import httpClient from '../../src/HttpClient';
import superagent from 'superagent';

const url = 'url';
const query = { a: 1, b: 2 };

describe('HttpClient', () => {
    beforeEach(() => {
        superagent.get.mockClear();
        superagent.query.mockClear();
        superagent.end.mockClear();
    });

    describe('get', () => {
        it('exists', () => {
            expect(httpClient.get).toBeDefined();
        });

        describe('happy path', () => {
            pit('creates a request and sends it', () => {
                const result = httpClient.get({ url, query });

                expect(superagent.get.mock.calls.length).toBe(1);
                expect(superagent.get).toBeCalledWith(url);

                expect(superagent.query.mock.calls.length).toBe(1);
                expect(superagent.query).toBeCalledWith(query);

                expect(superagent.end.mock.calls.length).toBe(1);

                return result
                    .then((response) => {
                        expect(response).toBe(superagent.mockResponse());
                    });
            });

            describe('no query passed', () => {
                it('does not called superagent.query', () => {
                    httpClient.get({ url });

                    expect(superagent.query.mock.calls.length).toBe(0);
                });
            });
        });

        describe('unhappy path', () => {
            const mockError = { message: 'I am an error!' };

            beforeEach(() => {
                superagent.setMockError(mockError);
            });

            pit('creates a request and sends it', () => {
                const result = httpClient.get({ url, query });

                expect(superagent.get.mock.calls.length).toBe(1);
                expect(superagent.get).toBeCalledWith(url);

                expect(superagent.query.mock.calls.length).toBe(1);
                expect(superagent.query).toBeCalledWith(query);

                expect(superagent.end.mock.calls.length).toBe(1);

                return result
                    .catch((error) => {
                        expect(error).toBe(mockError);
                    });
            });
        });
    });
});
