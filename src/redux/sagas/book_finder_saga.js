import { call ,put} from 'redux-saga/effects';
import {getBooksFromApi} from '../../axios/api/book_api';
import {addBooks} from '../actions/index'
// const HN_BASE_URL = 'http://hn.algolia.com/api/v1/search?query=';
 
// const fetchStories = query =>
//   fetch(HN_BASE_URL + query)
//     .then(response => response.json());
 
function* handlGetBooks(action) {
  console.log(action)
  const response =  yield call(getBooksFromApi,action.payload)
  console.log(response);
   console.log(response.data);
  // yield put(addBooks(response.data));
}
 
export {
  handlGetBooks,
};