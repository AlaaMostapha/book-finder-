import * as actionTypes from '../../constants/actionTypes';

const INITIAL_STATE = [];
export default function reducer(state=INITIAL_STATE, action) {
  switch(action.type) {
    case actionTypes.BOOKS_REUEST : {
      console.log(action,state)
      return [
        ...state,
        {
          payload:action.payload
        }
      ]
    }
    case actionTypes.BOOKS_RESPONSE : {
      
      return [
        ...state,
        {
          payload:action.payload.value
        }
      ];
    }
   
    default : return state;
  }
}