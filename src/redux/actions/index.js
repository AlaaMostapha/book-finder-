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

export const startLoading = value => ({
    type:actionTypes.LOAD_START,
    payload:{
       loading:value
    }
});

export const endLoading = value => ({
    type: actionTypes.LOAD_END,
    payload:{
        loading:value
    }
});
