import { takeEvery, all } from "redux-saga/effects";
import { handlGetBooks } from "./bookFinder";
import * as actionTypes from "../../constants/actionTypes";
function* watchAll() {
  yield all([takeEvery(actionTypes.BOOKS_REUEST, handlGetBooks)]);
}

export default watchAll;
