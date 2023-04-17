import axoisInstance from './axiosConfig';

const registerUserApi = async (userData) => {
  const url = '/auth/register';

  try {
    const res = await axoisInstance().post(url, userData);
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

export default registerUserApi;
