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

