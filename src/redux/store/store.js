import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../reducers/index';
import RootSaga from '../sagas/index';
//create saga middleware
const sagaMiddleware = createSagaMiddleware();
//create store
const store = createStore(
    rootReducer,
    applyMiddleware(sagaMiddleware)
);
//run saga
sagaMiddleware.run(RootSaga);

export default store;

