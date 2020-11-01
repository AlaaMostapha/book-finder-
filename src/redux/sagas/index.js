import { takeEvery, all } from 'redux-saga/effects';
import {handlGetBooks} from './book_finder';
// import {loading} from './loading'
import * as actionTypes from '../../constants/actionTypes';
function* watchAll() {
  yield all([
    takeEvery(actionTypes.BOOKS_REUEST,handlGetBooks),
    // takeEvery(actionTypes.LOAD_START,loading),
  ])
}
 
export default watchAll;