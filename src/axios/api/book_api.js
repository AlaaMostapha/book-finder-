import axiosInstance from "../axios/BaseUrl";
const searchBookApi = "AIzaSyAXDdnulyGAc4aLzIcnIEuHzCm9iadGA6g";

export const getBooksFromApi = async (params) => {
  return await axiosInstance.get(
    "books/v1/volumes?q=" + params + "&key=" + searchBookApi
  );
};
