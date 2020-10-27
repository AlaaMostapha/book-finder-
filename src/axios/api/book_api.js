
import axiosInstance from '../axios/book_find_axios';
const searchBookApi ="AIzaSyAXDdnulyGAc4aLzIcnIEuHzCm9iadGA6g";

export const getBooksFromApi = async (params) => {
  return await axiosInstance.get("books/v1/volumes?q="+params+"&key="+searchBookApi);
};
