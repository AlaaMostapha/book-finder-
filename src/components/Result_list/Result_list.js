import React, { useState } from 'react';
import './Result_list.scss';
import store from '../../redux/store/store';
import * as actions from '../../redux/actions/index';

function ResultList() {
  let [BookList, setBookList] = useState([]);

   function load(){
        store.dispatch(actions.addBooks());
         console.log(actions.addBooks());
         console.log(store.getState())
         BookList=store.getState()
    setBookList(BookList)
        //  this.setState({ books: store.getState() });
         console.log(BookList)
    } 
 
        return ( 
            <React.Fragment>
<button onClick={load}>
  click
</button>
{/* {BookList.map(book=>(
           <div key={book.payload}>{book}</div>
         ))} */}
            </React.Fragment>
         );
    }

export default ResultList;
