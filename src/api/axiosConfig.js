import axios from 'axios';
export const baseUrl = 'http://localhost:8080/api/v1/';

const axiosInstance = () => { 
  const headers = {}
  const token = localStorage.getItem("token")
  console.log(token,'token token token tokentoken token token token');
  if (localStorage.getItem("token")) {
    headers['Authorization']=`Bearer ${token}`
  }
  return axios.create({
    baseURL: baseUrl,
    headers: headers
  });
 }

export default axiosInstance;


