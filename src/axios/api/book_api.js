
import axiosInstance from '../axios/book_find_axios';
const searchBookApi ="AIzaSyAXDdnulyGAc4aLzIcnIEuHzCm9iadGA6g";
//get books list
// export const getBooks = async (book) =>{
//     try{
//         await axiosInstance.get(book+"&key="+searchBookApi).then(
//             data=>{
//                 console.log(data)
//             }
//         )
//     }catch(error){
//         console.error(error)
//     }
// }
export const getBooksFromApi = async (params) => {
  return await axiosInstance.get("books/v1/volumes?q="+params+"&key="+searchBookApi);
};
