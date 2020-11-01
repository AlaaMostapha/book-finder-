import axios from 'axios';
import * as Handlers from '../handlers/index';

//create axios instance
const axiosInstance = axios.create({
  baseURL:"https://www.googleapis.com/"
})

//    INTERCEPTORS
//request interceptor
axiosInstance.interceptors.request.use(
 request => Handlers.requestHandler(request)
);

//response interceptor
axiosInstance.interceptors.response.use(
  response => Handlers.successHandler(response),
  error => Handlers.errorHandler(error)
);


export default axiosInstance;