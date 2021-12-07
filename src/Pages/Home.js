import React from 'react'
import style from '../style/styleHome.css'
import { useSelector } from 'react-redux';

/*const style={

    backgroundRepeat: 'noRepeat',
    backgroundAttachment: 'fixed'
}*/
const Home=()=>{
    const{ show } =useSelector((state)=>state.navState)

    return(
        
        <main className='HomeWrapper' id='pageWrapper'>
            
            <div className='imgHome' ></div>
        </main>
    )
}
export default Home