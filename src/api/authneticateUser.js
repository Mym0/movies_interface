import axoisInstance from './axiosConfig';

const authneticateUserApi = async (userData) => {
  const url = '/auth/authenticate';

  try {
    const res = await axoisInstance().post(url, userData);
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

export default authneticateUserApi;
