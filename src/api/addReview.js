import axoisInstance from './axiosConfig';

const addReviewApi = async (body) => {
  const url = `/api/v1/reviews`;

  try {
    const { data } = await axoisInstance.post(url, body);
    return data;
  } catch (err) {
    console.log(err);
  }
};

export default addReviewApi;
