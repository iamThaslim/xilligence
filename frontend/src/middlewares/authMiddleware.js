
import axios from 'axios';

const authMiddleware = (config) => {
  const token = localStorage.getItem('userData') ? JSON.parse(localStorage.getItem('userData')).token : null;

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
};

export default authMiddleware;
// axios.interceptors.request.use(authMiddleware, (error) => {
//   return Promise.reject(error);
// });
