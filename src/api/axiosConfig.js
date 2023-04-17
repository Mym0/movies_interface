import axios from 'axios';
const baseUrl = 'http://localhost:8080/api/v1/';

const axoisInstance = () => { 
  const headers = {}
  const token = localStorage.getItem("token")
  if (localStorage.getItem("token")) {
    headers['Authorization']=`Bearer ${token}`
  }
  return axios.create({
    baseURL: baseUrl,
    headers: headers
  });
 }

export default axoisInstance;


