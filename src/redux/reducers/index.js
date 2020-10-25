import  { GET_BOOKS_REUEST,BOOKS_RESPONSE} from '../../constants/actionTypes'
// import 
export default function reducer(state, action) {
  switch(action.type) {
    case GET_BOOKS_REUEST : {
      console.log(action)
      return state;
    }
    case BOOKS_RESPONSE : {
      // do something and return new state
      //  return applySearch(state, action);
      return state;
    }
   
    default : return state;
  }
}