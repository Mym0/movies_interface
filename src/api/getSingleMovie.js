import axoisInstance from './config';

const getSingleMovieApi = async (movieId) => {
  const url = `/api/v1/movies/${movieId}`;

  try {
    const { data } = await axoisInstance.get(url);
    return data;
  } catch (err) {
    console.log(err);
  }
};

export default getSingleMovieApi;
