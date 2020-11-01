import * as actionTypes from '../../constants/actionTypes';
//update state
const INITIAL_STATE = [];
export default function bookReducer(state=INITIAL_STATE, action) {
  switch(action.type) {
    case actionTypes.BOOKS_REUEST : {
      console.log(action,state)
      return (
        {
          value:action.payload.value
        }
      )
    }
    case actionTypes.BOOKS_RESPONSE : {
      console.log(action,state)
      return (
        {
          books:action.payload.books
        }
      );
    }
   
    default : return state;
  }
}