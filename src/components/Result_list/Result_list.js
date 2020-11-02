import React,{Component} from 'react';
import './Result_list.scss';
import {connect} from 'react-redux';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import LoadingIndicator from '../Loading_indicator/Loading_indicator';
class  ResultList extends Component {

   createList(){   
      console.log( this.props)
      console.log(this.props.books)
      if(this.props.books) { 
        return (this.props.books.items || []).map((book)=>{
         return(
           <Grid item xs={3} key={book.id}>
             <Paper className="paper-custom">
              <div>
                  <h3>{book.volumeInfo.title}</h3> 
                  <p>{book.kind}</p>
                  {book.volumeInfo.imageLinks? <img src={book.volumeInfo.imageLinks.smallThumbnail} alt={book.volumeInfo.title}/>:""}
                </div>
            </Paper>
            </Grid>
         )
       })
      }
      
  }
 render() { 
  return ( 
    <React.Fragment>
      <Grid container spacing={2} alignItems="stretch" m="2rem">
        <LoadingIndicator loading={this.props.loading}/>
        {this.createList()}
        </Grid>
    </React.Fragment>
  );
  }
}
function mapStateToProps(state){
  console.log(state)
   console.log(state.books)
  return{
    books:state.bookReducer.books,
    loading:state.loadingReducer
  }
}
// function mapDispatchToProps(dispatch){
//   return{
//    addBooks : ()=>dispatch(actionsCreator.addBooks())
//   }
// }
export default connect(mapStateToProps,null)(ResultList); 