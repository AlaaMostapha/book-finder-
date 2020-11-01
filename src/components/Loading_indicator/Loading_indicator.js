import React from 'react';
import Loader from 'react-loader-spinner';

const LoadingIndicator = props => {
  return(
    <div className="loader">
      <Loader type="Bars" color="#3f51b5" secondaryColor="Grey" height="100" width="100" visible={props.loading} />
    </div>
  )
};
export default LoadingIndicator;