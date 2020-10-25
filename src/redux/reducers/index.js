import  { GET_BOOKS_REUEST,ADD_BOOKS} from '../../constants/actionTypes'
// import 
export default function reducer(state, action) {
  switch(action.type) {
    case GET_BOOKS_REUEST : {
      // do something and return new state
      //  return applySearch(state, action);
    }
    break;
    case ADD_BOOKS : {
      // do something and return new state
      //  return applySearch(state, action);
    }
    break;
    default : return state;
  }
}