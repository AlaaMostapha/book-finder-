import { call, put } from "redux-saga/effects";
import { getBooksFromApi } from "../../axios/api/book_api";
import { addBooks } from "../actions/index";

function* handlGetBooks(action) {
  console.log(action);
  const response = yield call(getBooksFromApi, action.payload.value);
  yield put(addBooks(response.data));
}

export { handlGetBooks };
