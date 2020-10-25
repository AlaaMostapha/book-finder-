import axios from 'axios';


//create axios instance
const axiosInstance = axios.create({
  baseURL:"https://www.googleapis.com/books/v1/volumes?q="
})


export default axiosInstance;