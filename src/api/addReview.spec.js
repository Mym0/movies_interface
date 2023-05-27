import axios from 'axios';
import addReviewApi from './addReview';
jest.mock('axios')
describe('addReview', () => {
  it('should addReview',async () => {

  await  addReviewApi();

    expect(axios).toHaveBeenCalled();
  });
});
