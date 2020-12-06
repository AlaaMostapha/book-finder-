import React from "react";
import "./loadingIndicator.scss";
import Loader from "react-loader-spinner";

function LoadingIndicator() {
  return (
    <div className="loader center">
      <Loader
        type="Bars"
        color="#3f51b5"
        secondaryColor="Grey"
        height={100}
        width={100}
      />
    </div>
  );
}

export default LoadingIndicator;
