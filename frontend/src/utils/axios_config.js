
import axios from 'axios';
import authMiddleware from '../middlewares/authMiddleware';

// Create an Axios instance
const axiosInstance = axios.create({
  baseURL:'http://localhost:8000/api/v1/',
});

// Use the auth middleware
axiosInstance.interceptors.request.use(authMiddleware, (error) => {
  return Promise.reject(error);
});

export default axiosInstance;
