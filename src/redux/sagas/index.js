import { takeEvery, all } from 'redux-saga/effects';
import {handlGetBooks} from './book_finder';
// import {handlLoading} from './loading'
import * as actionTypes from '../../constants/actionTypes';
function* watchAll() {
  yield all([
    takeEvery(actionTypes.BOOKS_REUEST,handlGetBooks),
    // takeEvery(actionTypes.LOADING,handlLoading),
  ])
}
 
export default watchAll;