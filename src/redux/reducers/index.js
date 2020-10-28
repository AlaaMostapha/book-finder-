import * as actionTypes from '../../constants/actionTypes';
//update state
const INITIAL_STATE = [];
export default function reducer(state=INITIAL_STATE, action) {
  switch(action.type) {
    case actionTypes.BOOKS_REUEST : {
      console.log(action,state)
      return [
        {
          payload:action.payload
        }
      ]
    }
    case actionTypes.BOOKS_RESPONSE : {
      console.log(action,state)
      return [
        {
          books:action.payload
        }
      ];
    }
   
    default : return state;
  }
}