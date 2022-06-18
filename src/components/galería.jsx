import React from "react";
import "../style/Galeria.css";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useState } from "react";
const Galeria = (props) => {
  const [actual, setActual] = useState(0);

  const nextImg = () => {
    console.log();
    setActual(actual === props.imageList.length - 1 ? 0 : actual + 1);
  };
  const prevImg = () => {
    setActual(actual === 0 ? props.imageList.length - 1 : actual - 1);
  };
  return (
    props.imageList && (
      <div className="galeriaWrapper">
        <IoIosArrowBack
          style={
            props.imageList.length === 1
              ? { display: "none" }
              : { display: "block" }
          }
          className="arrow arrowL"
          size="40"
          onClick={prevImg}
        />

        {props.imageList?.map((img, index) => {
          return (
            <div
              key={index}
              className={index === actual ? "imgActiva" : "slide"}
            >
              {index === actual && (
                console.log(img.url),
                <img key={index} className="imgMain" src={img.url} />
              )}
            </div>
          );
        })}
        <IoIosArrowForward
          style={
            props.imageList.length === 1
              ? { display: "none" }
              : { display: "block" }
          }
          className="arrow arrowR"
          size="40"
          onClick={nextImg}
        />
      </div>
    )
  );
};
export default Galeria;
