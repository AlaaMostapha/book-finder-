import { takeEvery, all } from 'redux-saga/effects';
import {handlGetBooks} from './book_finder_saga';
import {GET_BOOKS_REUEST} from '../../constants/actionTypes';
function* watchAll() {
  yield all([
    takeEvery(GET_BOOKS_REUEST,handlGetBooks),
  ])
}
 
export default watchAll;