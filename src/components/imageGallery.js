import React from 'react';
import '../style/styleImageGallery.css'
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"
const ImageGallery = (props) => {
    console.log(props.imageList)

    const childElements =
        props.imageList.map(img =>
            <img src={require("../img/" + props.ruta + img).default}></img>
        )

    return (
        <div className='GalleryWrapper'>

            <ResponsiveMasonry className='holaaa'
                columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 4 }}
            >
                <Masonry gutter={3}
>
                    {childElements}

                </Masonry>
            </ResponsiveMasonry>


        </div>
    )

}
export default ImageGallery