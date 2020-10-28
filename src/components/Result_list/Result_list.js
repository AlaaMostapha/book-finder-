import React,{Component} from 'react';
import './Result_list.scss';
import {connect} from 'react-redux';

class  ResultList extends Component {

   createList(){   
      console.log( this.props)
      console.log(this.props.books)
      if(this.props.books) { 
        return (this.props.books.items || []).map((book)=>{
         return(
         <div key={book.id}>
           <h3>{book.volumeInfo.title}</h3> 
           <p>{book.kind}</p>
           <img src={book.volumeInfo.imageLinks.smallThumbnail} alt={book.kind}/>
            </div>
         )
       })
      }
  }
 render() { 
  return ( 
    <React.Fragment>
        {this.createList()}
    </React.Fragment>
  );
  }
}
function mapStateToProps(state){
  console.log(state)
   console.log(state.books)
  return{
    books:state.books
  }
}
// function mapDispatchToProps(dispatch){
//   return{
//    addBooks : ()=>dispatch(actionsCreator.addBooks())
//   }
// }
export default connect(mapStateToProps,null)(ResultList); 