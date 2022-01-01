import { AiOutlineWhatsApp } from "react-icons/ai";
import { HiOutlineMail } from "react-icons/hi";
import { AiOutlineInstagram } from "react-icons/ai";
import { useSelector } from 'react-redux';

import style from '../style/styleFooter.css'
/*<div className='mediaWrapper'><AiOutlineWhatsApp size="40" className='iconFooter'/><p>Comunicate conmigo</p></div>
          <div className='mediaWrapper'><HiOutlineMail size="40"className='iconFooter'/><p>Enviame un correo</p></div>
          <div className='mediaWrapper'><AiOutlineInstagram size="40"className='iconFooter'/><p>Seguime en Instagram</p></div>*/
import React from 'react'

const Footer = () => {

    return (
        
        <footer id='contacto'>
            <h2>Contacto</h2>
            <div className='footerWrapper'>
                <AiOutlineWhatsApp size="40" className='iconFooter' />
                <HiOutlineMail size="40" className='iconFooter' />
                <AiOutlineInstagram size="40" className='iconFooter' />
            </div>
        </footer>)

    


    

}
export default Footer