import React from 'react'
import style from '../style/styleHome.css'
import GoTo from '../components/goTo'
import imgSec from '../img/logoSecundario.jpeg'
import { useSelector } from 'react-redux';

/*const style={

    backgroundRepeat: 'noRepeat',
    backgroundAttachment: 'fixed'
}*/
const Home=()=>{
    const{ show } =useSelector((state)=>state.navState)

    return(
        
        <main className='HomeWrapper' id='pageWrapper'>
            <img className='imgSec' src={imgSec}/>
        </main>
    )
}
export default Home