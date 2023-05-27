import axios from 'axios';
import getMoviesApi from './getMovies';
jest.mock('axios')
describe('getMoviesApi', () => {
  it('should return movies',async () => {

  await  getMoviesApi();

    expect(axios).toHaveBeenCalled();
  });
});
