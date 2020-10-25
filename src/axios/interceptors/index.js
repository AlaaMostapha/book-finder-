import axios from 'axios';
import {requestHandler,errorHandler,successHandler} from '../handlers/index';

//request interceptor
axios.interceptors.request.use(
 request => requestHandler(request)
);

//response interceptor
axios.interceptors.response.use(
  response => successHandler(response),
  error => errorHandler(error)
);

