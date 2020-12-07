import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import bookReducer from "../reducers/bookReducer";
import RootSaga from "../sagas/index";
//create saga middleware
const sagaMiddleware = createSagaMiddleware();
//create store
const store = createStore(bookReducer, applyMiddleware(sagaMiddleware));
//run saga
sagaMiddleware.run(RootSaga);

export default store;
