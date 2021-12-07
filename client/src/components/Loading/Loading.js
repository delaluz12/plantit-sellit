import React from "react";
import './Loading.css';

function Loading() {
  return (
    <div>
      <div className="container">
        <div className="loader">
          <div className="loader--dot"></div>
          <div className="loader--dot"></div>
          <div className="loader--dot"></div>
          <div className="loader--dot"></div>
          <div className="loader--dot"></div>
          <div className="loader--dot"></div>
          <div className="loader--text"></div>
        </div>
      </div>
    </div>
  );
}

export default Loading;
