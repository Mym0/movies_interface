import axiosInstance from './axiosConfig';

const registerUserApi = async (userData) => {
  const url = '/auth/register';

  try {
    const res = await axiosInstance().post(url, userData);
    return res.data;
  } catch (err) {
    console.log(err);
    return err
  }
};

export default registerUserApi;
