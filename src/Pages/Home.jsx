import React from "react";
import "../style/Home.css";
import imgHome from "../img/ef908db4-4e22-4030-bd87-445dfadd13e1.jpeg";
import PageWrapper from "../containers/pageWrapper";
const Home = () => {
  return (
    <PageWrapper xAnimation={true}>

        <img src={imgHome} className="imgHome"></img>
      
    </PageWrapper>
  );
};

export default Home;
