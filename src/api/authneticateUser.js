import axiosInstance from './axiosConfig';

const authneticateUserApi = async (userData) => {
  const url = '/auth/authenticate';

  try {
    const res = await axiosInstance().post(url, userData);
    return res.data;
  } catch (err) {
    console.log(err);
    return err
  }
};

export default authneticateUserApi;
