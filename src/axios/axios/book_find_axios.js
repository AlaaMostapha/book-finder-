import axios from 'axios';


//create axios instance
const axiosInstance = axios.create({
  baseURL:"https://www.googleapis.com/"
})


export default axiosInstance;