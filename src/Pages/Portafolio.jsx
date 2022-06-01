import React, { useEffect, useState } from "react";
import MainTitle from "../components/mainTitle";
import ImageGallery from "../components/imageGallery";
import PageWrapper from "../containers/pageWrapper";
import Loading from "../components/loading";
const Portafolio = () => {
  const [imagenes, setImagenes] = useState();
  useEffect(() => {
    fetch(`https://api.marcebaniziestudio.com/portafolio`)
      .then((imgs) => imgs.json())
      .then((imagenes) => setImagenes(imagenes));
  }, []);

  return (
   
      <PageWrapper xAnimation={true}>
        <MainTitle title="Portafolio" />
        {imagenes ? 
        <ImageGallery imageList={imagenes} />
        :<Loading/>}
      </PageWrapper>
    )
  
};

export default Portafolio;
