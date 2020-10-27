import axios from 'axios';
import '../interceptors/index'

//create axios instance
const axiosInstance = axios.create({
  baseURL:"https://www.googleapis.com/"
})


export default axiosInstance;