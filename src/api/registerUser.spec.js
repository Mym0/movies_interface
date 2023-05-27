import axios from 'axios';
import registerUserApi from './registerUser';
jest.mock('axios')
describe('registerUser', () => {
  it('should register User',async () => {

  await  registerUserApi();

    expect(axios).toHaveBeenCalled();
  });
});
