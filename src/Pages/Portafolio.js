import React,{useEffect, useState} from 'react'
import MainTitle from '../components/mainTitle'
import ImageGallery from '../components/imageGallery'

const Portafolio = () => {

    const [imagenes, setImagenes]=useState()
    useEffect(() => {
        fetch(`https://api.marcebaniziestudio.com/portafolio`)
          .then((imgs) => imgs.json())
          .then((imagenes) => setImagenes(imagenes));   
    
    }, [])
    
    return (
        
        <div>
            <main className='HomeWrapper' id='pageWrapper'>
                <MainTitle title='Portafolio'/>
                <ImageGallery imageList={imagenes}/>
            </main>
        </div>
    )
}

export default Portafolio