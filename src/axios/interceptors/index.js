import axios from 'axios';
import * as Handlers from '../handlers/index';

//request interceptor
axios.interceptors.request.use(
 request => Handlers.requestHandler(request)
);

//response interceptor
axios.interceptors.response.use(
  response => Handlers.successHandler(response),
  error => Handlers.errorHandler(error)
);

