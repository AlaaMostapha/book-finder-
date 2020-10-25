import {GET_BOOKS_REUEST,BOOKS_RESPONSE} from '../../constants/actionTypes';

export const getBooks = (payload) => ({
    type: GET_BOOKS_REUEST,
    payload 
});

export const addBooks = (payload) => ({
    type: BOOKS_RESPONSE,
    payload
});
