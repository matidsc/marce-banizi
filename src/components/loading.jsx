import React from "react";
import img from "../img/logoPrincipalDark.jpeg";
import "../style/Loading.css";
const Loading = () => {
  return (
    <div className="loadingWrapper">
      
      <img src={img} />
    </div>
  );
};

export default Loading;
