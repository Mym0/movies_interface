import axiosInstance from './axiosConfig';

const getMoviesApi = async () => {
  const url = '/movies';

  try {
    const res = await axiosInstance().get(url);
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

export default getMoviesApi;
