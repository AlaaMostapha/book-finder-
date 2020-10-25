import React, { Component } from 'react';
import { connect } from 'react-redux';
import {getBooks} from '../../redux/actions/index';
import './Result_list.scss';
class ResultList extends Component {
    // constructor(props){
    //     super(props);

    // }
    // componentDidMount=()=>{
    //     console.log(this.props)
    //     this.props.getBooks();
    // }
    
    render() { 
        return ( 
            <React.Fragment>

            </React.Fragment>
         );
    }
}
export default connect(
  null,
  getBooks,
)(ResultList);
