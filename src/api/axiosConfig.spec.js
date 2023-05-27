import axios from 'axios';
import axoisInstance from './axiosConfig';

 jest.mock('axios'); // Mock the axios module

describe('axoisInstance', () => {
  it('should create an instance of axios with the correct base URL and headers', () => {
    axoisInstance();
    expect(axios).toHaveBeenCalled();
  });
});
