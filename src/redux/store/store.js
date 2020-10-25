import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducer from '../reducers';
import RootSaga from '../sagas/index';
//create saga middleware
const sagaMiddleware = createSagaMiddleware();
//create store
const store = createStore(
    reducer,
    applyMiddleware(sagaMiddleware)
);
//run saga
sagaMiddleware.run(RootSaga);

export default store;

// import { createStore, applyMiddleware, compose } from "redux";
// import reducers from "../reducers";
// import createSagaMiddleware from "redux-saga";
// import watchSagas  from '../sagas/index';
// const saga = createSagaMiddleware();
// //redux dev tool
// const composeEnhancers =
//   typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
//     ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
//     : compose;
// const enhancer = composeEnhancers(applyMiddleware(saga));
// const store = createStore(reducers, enhancer);
// saga.run(watchSagas);
// export default store;