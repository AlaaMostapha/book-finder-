import {GET_BOOKS_REUEST,ADD_BOOKS} from '../../constants/actionTypes';

export const getBooks = (payload) => ({
    type: GET_BOOKS_REUEST,
    payload 
});

export const addBooks = (payload) => ({
    type: ADD_BOOKS,
    payload
});
