import React, { Component } from 'react';
import './Result_list.scss';
import store from '../../redux/store/store';
import * as actions from '../../redux/actions/index';

class ResultList extends Component {
    // constructor(props){
    //     super(props);

    // }
    componentDidMount=()=>{
         store.dispatch(actions.addBooks());
         console.log(actions.addBooks());
         console.log(store.getState())
    }
    
    
    render() { 
        return ( 
            <React.Fragment>

            </React.Fragment>
         );
    }
}
export default ResultList;
