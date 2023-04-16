import axios from 'axios';
const token =
  ' eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJtYXhzaGVybWFuQG1haWwuY29tIiwiaWF0IjoxNjgwODE2ODk4LCJleHAiOjE2ODA4MTgzMzh9.w-d5Yya7_bC2F8s8Gg00rNDk9FfgCRdpfpN-VhZAOlo';
const baseUrl = 'http://localhost:8080';

const axoisInstance = axios.create({
  baseURL: baseUrl,
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

export default axoisInstance;
