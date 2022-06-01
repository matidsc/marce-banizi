import React from "react";
import "../style/ImageGallery.css";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
const ImageGallery = (props) => {
  const childElements = props.imageList?.map((img, index) => (
    <img key={index} src={img.url}></img>
  ));
  return (
    <div className="GalleryWrapper">
      <ResponsiveMasonry
        className="images"
        columnsCountBreakPoints={{ 350: 1, 500: 2, 900: 4 }}
      >
        <Masonry gutter={3}>{childElements}</Masonry>
      </ResponsiveMasonry>
    </div>
  );
};
export default ImageGallery;
