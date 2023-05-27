    // Mock the localStorage globally, mocked get method to return user token
const localStorageMock = {
  getItem: jest.fn().mockReturnValue('token'),
  setItem: jest.fn(),
  clear: jest.fn()
};

global.localStorage = localStorageMock;
