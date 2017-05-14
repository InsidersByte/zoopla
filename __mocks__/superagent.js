/* eslint-env jest */

// sourced from https://github.com/facebook/jest/issues/223

let mockDelay;
let mockError;
let mockResponse = {
  status() {
    return 200;
  },
  ok() {
    return true;
  },
  get: jest.genMockFunction(),
  toError: jest.genMockFunction(),
};

const Request = {
  post() {
    return this;
  },
  get: jest.fn(() => Request),
  send() {
    return this;
  },
  query: jest.fn(() => Request),
  field() {
    return this;
  },
  set() {
    return this;
  },
  accept() {
    return this;
  },
  timeout() {
    return this;
  },
  end: jest.genMockFunction().mockImplementation(callback => {
    if (mockDelay) {
      this.delayTimer = setTimeout(callback, 0, mockError, mockResponse);
      return;
    }

    callback(mockError, mockResponse);
  }),

  // expose helper methods for tests to set
  setMockDelay(boolValue) {
    mockDelay = boolValue;
  },

  setMockResponse(mockRes) {
    mockResponse = mockRes;
  },

  setMockError(mockErr) {
    mockError = mockErr;
  },

  mockResponse() {
    return mockResponse;
  },
};

module.exports = Request;
