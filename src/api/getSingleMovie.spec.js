import axios from 'axios';
import getSingleMovieApi from './getSingleMovie';
jest.mock('axios')
describe('getSingleMovie', () => {
  it('should return movie',async () => {

  await  getSingleMovieApi();

    expect(axios).toHaveBeenCalled();
  });
});
