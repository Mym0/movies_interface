import axiosInstance from './axiosConfig';

const getSingleMovieApi = async (movieId) => {
  const url = `/movies/${movieId}`;

  try {
    const { data } = await axiosInstance().get(url);
    return data;
  } catch (err) {
    console.log(err);
  }
};

export default getSingleMovieApi;
