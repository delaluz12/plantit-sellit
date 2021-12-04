import React from "react";
import './Loading.css';

function Loading() {
  return (
    <div>
      <div class="container">
        <div class="loader">
          <div class="loader--dot"></div>
          <div class="loader--dot"></div>
          <div class="loader--dot"></div>
          <div class="loader--dot"></div>
          <div class="loader--dot"></div>
          <div class="loader--dot"></div>
          <div class="loader--text"></div>
        </div>
      </div>
    </div>
  );
}

export default Loading;
