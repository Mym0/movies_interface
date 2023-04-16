import axoisInstance from './axiosConfig';

const getMoviesApi = async () => {
  const url = '/api/v1/movies';

  try {
    const response = await axoisInstance.get(url);
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export default getMoviesApi;
