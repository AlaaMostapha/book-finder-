import * as actionTypes from '../../constants/actionTypes';
//dispatch actions
export const getBooks = value => ({
    type:actionTypes.BOOKS_REUEST,
    payload:{
        value
    }
});

export const addBooks = response => ({
    type: actionTypes.BOOKS_RESPONSE,
    payload:{
        books:response
    }
});
