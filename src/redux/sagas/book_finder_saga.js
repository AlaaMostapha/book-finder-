import { call, put } from 'redux-saga/effects';
import {getBooks} from '../../axios/api/book_api'
// const HN_BASE_URL = 'http://hn.algolia.com/api/v1/search?query=';
 
// const fetchStories = query =>
//   fetch(HN_BASE_URL + query)
//     .then(response => response.json());
 
function* handlGetBooks(action) {
  console.log(action.payload)
  const response =  yield call(getBooks,action.payload)
  console.log(response);
}
 
export {
  handlGetBooks,
};