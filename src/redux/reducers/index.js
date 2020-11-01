import { combineReducers } from 'redux';
import bookReducer from './book_reducer';
import loadingReducer from './loading_reducer';
 
const rootReducer = combineReducers({
   bookReducer,
   loadingReducer,
});
 
export default rootReducer;
