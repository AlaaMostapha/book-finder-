import React ,{Component}from 'react';
import './Loading_indicator.scss';
import Loader from 'react-loader-spinner';


class  LoadingIndicator extends Component{
 render() { 
  return(
    <div className="loader center">
      <Loader type="Bars" color="#3f51b5" secondaryColor="Grey" height={100} width={100} />
    </div>
  )
   }
};


export default LoadingIndicator; 
