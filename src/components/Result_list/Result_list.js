import React from 'react';
import './Result_list.scss';

import {connect} from 'react-redux';
import * as actionsCreator from '../../redux/actions/index';
function ResultList(props) {
  // let [BookList, setBookList] = useState([]);

  function load(){
    // store.dispatch(actions.addBooks());
    // console.log(actions.addBooks());
    // console.log(store.getState())
    // console.log(props.books)
     console.log( props.books)
     props.addBooks();
      console.log( props.books)
  } 
  function createList(){
    console.log( props.book)
  }
 
  return ( 
    <React.Fragment>
        <button onClick={load}>
        click
        </button>
        {createList()}
      
    </React.Fragment>
  );
}
function mapStateToProps(state){
  return{
    books:state.books
  }
}
function mapDispatchToProps(dispatch){
  return{
   addBooks : ()=>dispatch(actionsCreator.addBooks())
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(ResultList);
