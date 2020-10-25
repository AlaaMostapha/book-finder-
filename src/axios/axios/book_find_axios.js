import axios from 'axios';
import searchBookApi from '../api/book_api'

//create axios instance
const axiosInstance = axios.create({
  baseURL:"https://www.googleapis.com/books/v1/volumes?q="
})

//get books list
export const getBooks = async (book) =>{
    try{
        await axiosInstance.get(book+"&key="+searchBookApi).then(
            data=>{
                console.log(data)
            }
        )
    }catch(error){
        console.error(error)
    }
}