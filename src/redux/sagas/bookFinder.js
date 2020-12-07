import { call, put } from "redux-saga/effects";
import { getBooksFromApi } from "../../network/api/book";
import { addBooks } from "../actions/index";

function* handlGetBooks(action) {
  try {
    const response = yield call(getBooksFromApi, action.payload.value);
    yield put(addBooks(response.data));
  } catch (error) {
    console.log(error);
  }
}

export { handlGetBooks };
