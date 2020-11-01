import * as actionTypes from '../../constants/actionTypes';
//update state
const INITIAL_STATE = false;
export default function loadingReducer(state=INITIAL_STATE, action) {
  switch(action.type) {
    case actionTypes.LOAD_START : {
      console.log(action,state)
      return (
        {
           loading:action.payload.loading
        }
      )
    }
    case actionTypes.LOAD_END : {
      console.log(action,state)
      return (
        {
          loading:action.payload.loading
        }
      );
    }
   
    default : return state;
  }
}