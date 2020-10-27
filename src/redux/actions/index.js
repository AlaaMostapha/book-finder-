import * as actionTypes from '../../constants/actionTypes';

export const getBooks = value => ({
    type:actionTypes.BOOKS_REUEST,
    payload:{
        value
    }
});

export const addBooks = response => ({
    type: actionTypes.BOOKS_RESPONSE,
    payload:{
        value:response
    }
});
